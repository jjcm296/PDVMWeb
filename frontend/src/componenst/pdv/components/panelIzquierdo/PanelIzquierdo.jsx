import React, { useEffect, useState } from 'react';
import Buscador from '../../../ui/buscador/Buscador';
import VistaToggle from '../switchVista/VistaToggle';
import TarjetaProducto from '../tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../tarjetasProducto/TarjetaProductoBarra';
import './PanelIzquierdo.css';
import BotonFiltro from "../../../ui/botonFiltro/BotonFiltro";
import { useProductos } from "../../../../context/ProductosContext";

const PanelIzquierdo = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');

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

    return (
        <div className="panel-izquierdo-contenedor">
            <div className="barra-superior">
                <Buscador onBuscar={setBusqueda} />
                <BotonFiltro />
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
    );
};

export default PanelIzquierdo;
