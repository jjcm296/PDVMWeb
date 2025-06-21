import React from 'react';
import './ProductoSeleccionado.css';
import { TrashIcon } from '@heroicons/react/24/solid';

const ProductoSeleccionado = ({ nombre, precio, cantidad = 1, onEliminar }) => {
    return (
        <div className="producto-seleccionado">
            <div className="info-producto">
                <span className="nombre">{nombre}</span>
                <span className="cantidad">Cantidad: x{cantidad}</span>
            </div>
            <span className="precio-unitario">${parseFloat(precio).toFixed(2)} c/u</span>
            <span className="precio-total">${(precio * cantidad).toFixed(2)}</span>
            <div className="acciones-producto">
                <button className="boton-eliminar" onClick={onEliminar} title="Eliminar">
                    <TrashIcon className="icono-basura" />
                </button>
            </div>
        </div>
    );
};

export default ProductoSeleccionado;
