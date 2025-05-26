import React from 'react';
import './TarjetaProducto.css';

const TarjetaProductoBarra = ({ nombre , onAgregar,  onClick }) => {
    return (
        <div className="tarjeta-barra" onClick={onClick}>
            <span className="nombre-barra">{nombre}</span>
            <button className="boton-barra" onClick={onAgregar}>+</button>
        </div>
    );
};

export default TarjetaProductoBarra;
