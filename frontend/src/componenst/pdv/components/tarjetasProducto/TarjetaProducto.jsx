import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({ nombre, onClick, onAgregar}) => {
    return (
        <div className="tarjeta-producto" onClick={onClick}>
            <div className="imagen-producto">📦</div>
            <div className="nombre-producto">{nombre}</div>
            <button className="boton-agregar" onClick={onAgregar}>+</button>
        </div>

    );
};

export default TarjetaProducto;
