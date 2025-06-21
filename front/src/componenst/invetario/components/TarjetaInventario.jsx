import React from 'react';
import './TarjetaInventario.css';
import { FaBoxOpen } from 'react-icons/fa';

const TarjetaInventario = ({ nombreProducto, stockMinimo, stockActual, totalVentas, totalSuministros }) => {
    return (
        <div className="tarjeta-inventario">
            <div className="encabezado-tarjeta">
                <h3 className="nombre-producto">{nombreProducto}</h3>
                <div className="icono">
                    <FaBoxOpen size={28} color="#000C8F"/>
                </div>
            </div>
            <div className="info">
                <p><strong>Stock actual:</strong> {stockActual}</p>
                <p><strong>Stock mínimo:</strong> {stockMinimo}</p>
                <p><strong>Ventas:</strong> {totalVentas}</p>
                <p><strong>Suministros:</strong> {totalSuministros}</p>
            </div>
        </div>
    );
};

export default TarjetaInventario;
