import React from 'react';
import './TarjetaProducto.css';

const TarjetaProductoBarra = ({ nombre = "Producto", onAgregar }) => {
    return (
        <div className="tarjeta-barra">
            <span className="nombre-barra">{nombre}</span>
            <button className="boton-barra" onClick={onAgregar}>+</button>
        </div>
    );
};

export default TarjetaProductoBarra;
