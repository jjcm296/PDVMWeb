import React, { useEffect, useState } from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import TarjetaProducto from '../pdv/components/tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../pdv/components/tarjetasProducto/TarjetaProductoBarra';
import ModalAgregarProducto from './modales/modalAgregarProducto/ModalAgregarProducto';
import ModalDetalleProducto from './modales/modalDetalleProducto/ModalDetalleProducto';
import './Productos.css';
import BotonAgregar from "../ui/BotonAgregar/BotonAgregar";
import BotonFiltro from "../ui/botonFiltro/BotonFiltro";

import { useProductos } from '../../context/productosContext';
import { useNavigate } from "react-router-dom";
import { apiAddProductos } from "../../api/apiProductos";
import { useCarrito } from "../../context/carritoContext";

const Productos = () => {
    const navigate = useNavigate();
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [productoSinStock, setProductoSinStock] = useState(null);

    const { productosOriginales, loadProductos } = useProductos();
    const [productosOrdenados, setProductosOrdenados] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    const { agregarProducto } = useCarrito();

    useEffect(() => {
        loadProductos();
    }, []);

    useEffect(() => {
        if (productosOriginales) {
            setProductosOrdenados([...productosOriginales]);
        }
    }, [productosOriginales]);

    useEffect(() => {
        const filtrados = productosOrdenados.filter(p =>
            p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            (p.codigoBarra && p.codigoBarra.toLowerCase().includes(busqueda.toLowerCase()))
        );
        setProductosFiltrados(filtrados);
    }, [busqueda, productosOrdenados]);

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => setMostrarModal(false);

    const handleAgregarProducto = async (form) => {
        const resultado = await apiAddProductos(form);
        if (resultado) {
            await loadProductos();
            return true;
        } else {
            alert("Hubo un error al guardar el producto.");
            return false;
        }
    };

    const handleAgregarAlCarrito = (producto) => {
        if (producto.stockActual <= 0) {
            setProductoSinStock(producto);
        } else {
            agregarProducto({
                id: producto.idProducto,
                nombre: producto.nombre,
                precio: producto.precio
            });
        }
    };

    const cerrarModalSinStock = () => setProductoSinStock(null);

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda}/>
                    <div className="botones-superior">
                        <BotonFiltro/>
                        <BotonAgregar esProducto={false} onClick={() => navigate('/category')}/>
                        <BotonAgregar onClick={abrirModal}/>
                    </div>
                </div>

                <div className={`productos-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                    {productosFiltrados.map((producto, index) =>
                        vista === 'grid' ? (
                            <TarjetaProducto
                                key={producto.idProducto || index}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                onClick={() => setProductoSeleccionado(producto)}
                                onAgregar={() => handleAgregarAlCarrito(producto)}
                            />
                        ) : (
                            <TarjetaProductoBarra
                                key={producto.idProducto || index}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                onAgregar={() => handleAgregarAlCarrito(producto)}
                            />
                        )
                    )}
                </div>

                <div className="switch-inferior">
                    <VistaToggle vista={vista} onCambiarVista={setVista}/>
                </div>
            </div>

            {mostrarModal && <ModalAgregarProducto onClose={cerrarModal} onSubmit={handleAgregarProducto}/>}
            {productoSeleccionado && (
                <ModalDetalleProducto
                    producto={productoSeleccionado}
                    onClose={() => setProductoSeleccionado(null)}
                />
            )}
            {productoSinStock && (
                <div className="modal-desarrollo-overlay">
                    <div className="modal-desarrollo">
                        <img src="/logo/Logo.png" alt="logo" className="modal-logo" />
                        <h2>Stock insuficiente</h2>
                        <p>El producto "{productoSinStock.nombre}" no se puede agregar al carrito porque el stock es 0.</p>
                        <button className="modal-desarrollo-boton" onClick={cerrarModalSinStock}>Entendido</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Productos;
