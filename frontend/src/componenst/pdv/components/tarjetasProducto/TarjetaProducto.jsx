import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({ nombre, onClick }) => {
    return (
        <div className="tarjeta-producto" onClick={onClick}>
            <div className="imagen-producto">📦</div>
            <div className="nombre-producto">{nombre}</div>
            <button className="boton-agregar">+</button>
        </div>

    );
};

export default TarjetaProducto;
