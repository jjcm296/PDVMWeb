import React from 'react';
import './TarjetaProducto.css'; // mismo archivo CSS

const TarjetaProductoBarra = ({ nombre = "Producto", onAgregar }) => {
    return (
        <div className="tarjeta-barra">
            <span className="nombre-barra">Producto A</span>
            <button className="boton-barra" onClick={onAgregar}>+</button>
        </div>
    );
};

export default TarjetaProductoBarra;
