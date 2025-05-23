import React, { useEffect, useState } from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import TarjetaProducto from '../pdv/components/tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../pdv/components/tarjetasProducto/TarjetaProductoBarra';
import ModalAgregarProducto from './modales/modalAgregarProducto/ModalAgregarProducto';
import './Productos.css';
import BotonAgregar from "../ui/BotonAgregar/BotonAgregar";
import BotonFiltro from "../ui/botonFiltro/BotonFiltro";

import { useProductos } from '../../context/ProductosContext';

const Productos = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);

    const { productosOriginales, loadProductos } = useProductos();
    const [productosOrdenados, setProductosOrdenados] = useState([]);

    useEffect(() => {
        loadProductos();
    }, []);

    useEffect(() => {
        if (productosOriginales) {
            setProductosOrdenados([...productosOriginales]);
        }
    }, [productosOriginales]);

    const productosFiltrados = productosOrdenados.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => setMostrarModal(false);

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda} />
                    <div className="botones-superior">
                        <BotonFiltro />
                        <BotonAgregar esProducto={false} />
                        <BotonAgregar onClick={abrirModal} />
                    </div>
                </div>

                <div className={`productos-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                    {productosFiltrados.map((producto, index) =>
                        vista === 'grid' ? (
                            <TarjetaProducto key={producto.idProducto || index} nombre={producto.nombre} />
                        ) : (
                            <TarjetaProductoBarra key={producto.idProducto || index} nombre={producto.nombre} />
                        )
                    )}
                </div>

                <div className="switch-inferior">
                    <VistaToggle vista={vista} onCambiarVista={setVista} />
                </div>
            </div>

            {mostrarModal && <ModalAgregarProducto onClose={cerrarModal} />}
        </div>
    );
};

export default Productos;
