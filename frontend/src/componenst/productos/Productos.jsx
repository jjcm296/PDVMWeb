import React, { useEffect, useState } from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import TarjetaProducto from '../pdv/components/tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../pdv/components/tarjetasProducto/TarjetaProductoBarra';
import ModalAgregarProducto from './modales/modalAgregarProducto/ModalAgregarProducto';
import './Productos.css';
import BotonAgregar from "../ui/BotonAgregar/BotonAgregar";
import BotonFiltro from "../ui/botonFiltro/BotonFiltro";

import { useProductos } from '../../context/productosContext';
import { useNavigate } from "react-router-dom";
import { apiAddProductos } from "../../api/apiProductos";
import {useCarrito} from "../../context/carritoContext";

const Productos = () => {
    const navigate = useNavigate();
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);

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

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda} />
                    <div className="botones-superior">
                        <BotonFiltro />
                        <BotonAgregar esProducto={false} onClick={() => navigate('/category')} />
                        <BotonAgregar onClick={abrirModal} />
                    </div>
                </div>

                <div className={`productos-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                    {productosFiltrados.map((producto, index) =>
                        vista === 'grid' ? (
                            <TarjetaProducto
                                key={producto.idProducto || index}
                                nombre={producto.nombre}
                                onAgregar={() => agregarProducto({
                                    id: producto.idProducto,
                                    nombre: producto.nombre,
                                    precio: producto.precio
                                })}
                            />
                        ) : (
                            <TarjetaProductoBarra
                                key={producto.idProducto || index}
                                nombre={producto.nombre}
                                onAgregar={() => agregarProducto({
                                    id: producto.idProducto,
                                    nombre: producto.nombre,
                                    precio: producto.precio
                                })}
                            />
                        )
                    )}
                </div>

                <div className="switch-inferior">
                    <VistaToggle vista={vista} onCambiarVista={setVista} />
                </div>
            </div>

            {mostrarModal && <ModalAgregarProducto onClose={cerrarModal} onSubmit={handleAgregarProducto} />}
        </div>
    );
};

export default Productos;
