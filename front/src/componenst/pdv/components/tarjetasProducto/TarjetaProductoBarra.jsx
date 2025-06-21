import React from 'react';
import './TarjetaProducto.css';

const TarjetaProductoBarra = ({ nombre, precio, onAgregar, onClick, mostrarPrecio = true }) => {
    return (
        <div className="tarjeta-barra" onClick={onClick}>
            <span className="nombre-barra">{nombre}</span>
            {mostrarPrecio && <span className="precio-barra">${precio}</span>}
            <button className="boton-barra" onClick={(e) => {
                e.stopPropagation();
                onAgregar();
            }}>+</button>
        </div>
    );
};

export default TarjetaProductoBarra;
