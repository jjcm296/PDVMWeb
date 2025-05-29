import React from 'react';
import './TarjetaInventarioBarra.css';
import {FaBoxOpen, FaTag} from 'react-icons/fa';

const TarjetaInventarioBarra = ({ nombre, stockMinimo, stockActual, ventasTotales, suministrosTotales }) => {
    return (
        <div className="tarjeta-inventario-barra">
            <div className="icono-nombre">
                <FaBoxOpen size={28} color="#000C8F"/>
                <span className="titulo">{nombre}</span>
            </div>
            <div className="detalle">Stock: {stockActual}</div>
            <div className="detalle">Mínimo: {stockMinimo}</div>
            <div className="detalle">Ventas: {ventasTotales}</div>
            <div className="detalle">Suministros: {suministrosTotales}</div>
        </div>
    );
};

export default TarjetaInventarioBarra;
