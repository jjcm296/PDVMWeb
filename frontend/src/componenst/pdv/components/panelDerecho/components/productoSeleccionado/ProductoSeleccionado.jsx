import React from 'react';
import './ProductoSeleccionado.css';
import { TrashIcon } from '@heroicons/react/24/solid';

const ProductoSeleccionado = ({ nombre, precio, cantidad = 1, onEliminar }) => {
    return (
        <div className="producto-seleccionado">
            <div className="info-producto">
                <span className="nombre">{nombre}</span>
                <span className="cantidad">x{cantidad}</span>
            </div>
            <div className="acciones-producto">
                <span className="precio">${(precio * cantidad).toFixed(2)}</span>
                <button className="boton-eliminar" onClick={onEliminar} title="Eliminar">
                    <TrashIcon className="icono-basura" />
                </button>
            </div>
        </div>
    );
};

export default ProductoSeleccionado;
