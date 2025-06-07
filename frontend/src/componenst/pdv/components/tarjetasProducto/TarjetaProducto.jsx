import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({
                             nombre,
                             precio,
                             onClick,
                             onAgregar,
                             mostrarPrecio = true,
                             seleccionado = false,
                             modoPDV = false
                         }) => {
    const botonClase = `boton-agregar ${modoPDV && seleccionado ? 'seleccionado' : ''}`;

    return (
        <div className={`tarjeta-producto ${modoPDV ? 'modo-pdv' : ''}`} onClick={onClick}>
            <div className="imagen-producto">📦</div>
            <div className="nombre-producto">{nombre}</div>
            {mostrarPrecio && (
                <div className="precio-producto">
                    <span className="moneda">$</span>{precio}
                </div>
            )}
            <button
                className={botonClase}
                onClick={(e) => {
                    e.stopPropagation();
                    onAgregar();
                }}
            >
                +
            </button>
        </div>
    );
};

export default TarjetaProducto;
