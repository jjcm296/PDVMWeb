import React from 'react';
import './TarjetaInventarioBarra.css';

const TarjetaInventarioBarra = ({ nombre, stockMinimo, stockActual, ventasTotales, suministrosTotales }) => {
    return (
        <div className="tarjeta-inventario-barra">
            <div className="titulo">{nombre}</div>
            <div className="detalle">Stock actual: {stockActual}</div>
            <div className="detalle">Stock mínimo: {stockMinimo}</div>
            <div className="detalle">Ventas: {ventasTotales}</div>
            <div className="detalle">Suministros: {suministrosTotales}</div>
        </div>
    );
};

export default TarjetaInventarioBarra;
