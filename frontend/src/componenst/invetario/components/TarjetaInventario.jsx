import React from 'react';
import './TarjetaInventario.css';

const TarjetaInventario = ({ nombre, stockMinimo, stockActual, ventasTotales, suministrosTotales }) => {
    return (
        <div className="tarjeta-inventario">
            <h3>{nombre}</h3>
            <p>Stock actual: {stockActual}</p>
            <p>Stock mínimo: {stockMinimo}</p>
            <p>Ventas totales: {ventasTotales}</p>
            <p>Suministros totales: {suministrosTotales}</p>
        </div>
    );
};

export default TarjetaInventario;
