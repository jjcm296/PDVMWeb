import React, {useEffect, useState} from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import TarjetaProducto from '../pdv/components/tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../pdv/components/tarjetasProducto/TarjetaProductoBarra';
import './Productos.css';
import BotonAgregar from "../ui/BotonAgregar/BotonAgregar";
import BotonFiltro from "../ui/botonFiltro/BotonFiltro";

import {apiGetAllProductos} from "../../api/apiProductos";

const Productos = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await apiGetAllProductos();
                console.log('Productos:', response);
                setProductos(response);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, []);

    const productosFiltrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda}/>
                    <div className="botones-superior">
                        <BotonFiltro/>
                        <BotonAgregar esProducto={false}/>
                        <BotonAgregar/>
                    </div>
                </div>

                <div className={`productos-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                    {productosFiltrados.map(producto =>
                        vista === 'grid' ? (
                            <TarjetaProducto key={producto.idProducto} nombre={producto.nombre}/>
                        ) : (
                            <TarjetaProductoBarra key={producto.idProducto} nombre={producto.nombre}/>
                        )
                    )}
                </div>

                <div className="switch-inferior">
                    <VistaToggle vista={vista} onCambiarVista={setVista}/>
                </div>
            </div>
        </div>
    );
};

export default Productos;
