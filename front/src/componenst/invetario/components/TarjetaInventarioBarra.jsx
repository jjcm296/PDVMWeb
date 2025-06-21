import React from 'react';
import './TarjetaInventarioBarra.css';
import { FaBoxOpen } from 'react-icons/fa';

const TarjetaInventarioBarra = ({ nombreProducto, stockMinimo, stockActual, totalVentas, totalSuministros }) => {
    return (
        <div className="tarjeta-inventario-barra">
            <div className="icono-nombre">
                <FaBoxOpen size={28} color="#000C8F"/>
                <span className="titulo">{nombreProducto}</span>
            </div>
            <div className="detalle">Stock: {stockActual}</div>
            <div className="detalle">Mínimo: {stockMinimo}</div>
            <div className="detalle">Ventas: {totalVentas}</div>
            <div className="detalle">Suministros: {totalSuministros}</div>
        </div>
    );
};

export default TarjetaInventarioBarra;
