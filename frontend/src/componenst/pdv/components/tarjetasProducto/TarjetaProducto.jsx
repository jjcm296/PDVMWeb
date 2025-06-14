import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({
                             nombre,
                             precio,
                             stock,
                             onClick,
                             onAgregar,
                             mostrarPrecio = true,
                             mostrarStock = false,
                             seleccionado = false,
                             modoPDV = false
                         }) => {
    const botonClase = `boton-agregar ${modoPDV && seleccionado ? 'seleccionado' : ''}`;

    return (
        <div
            className={`tarjeta-producto ${modoPDV ? 'modo-pdv' : ''} ${mostrarStock && stock === 0 ? 'sin-stock' : ''}`}
            onClick={onClick}
        >

            <div className="imagen-producto">📦</div>
            <div className="nombre-producto">{nombre}</div>

            {mostrarPrecio && !mostrarStock && (
                <div className="precio-producto">
                    <span className="moneda">$</span>{precio}
                </div>
            )}

            {mostrarStock && stock > 0 && (
                <div className="precio-producto">
                    Stock: {stock}
                </div>
            )}

            {mostrarStock && stock === 0 && (
                <div className="alerta-sin-stock">
                    <i className="fas fa-exclamation-triangle"></i> Agotado
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
