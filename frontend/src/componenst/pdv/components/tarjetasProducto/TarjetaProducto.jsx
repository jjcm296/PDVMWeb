import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({ nombre = "Producto", onAgregar }) => {
    return (
        <div className="tarjeta-producto">
            <div className="imagen-producto">📦</div>
            <div className="nombre-producto">Producto A</div>
            <button className="boton-agregar">+</button>
        </div>

    );
};

export default TarjetaProducto;
