import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({ nombre, precio, onClick, onAgregar, mostrarPrecio = true }) => {
    return (
        <div className="tarjeta-producto" onClick={onClick}>
            <div className="imagen-producto">📦</div>
            <div className="nombre-producto">{nombre}</div>
            {mostrarPrecio && (
                <div className="precio-producto">${precio}</div>
            )}
            <button className="boton-agregar" onClick={(e) => { 
                e.stopPropagation(); 
                onAgregar(); 
            }}>
                +
            </button>
        </div>
    );
};

export default TarjetaProducto;
