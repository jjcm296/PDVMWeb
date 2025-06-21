import React from 'react';
import './BotonAgregar.css';
import { PlusIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const BotonAgregar = ({ onClick, esProducto = true }) => {
    return (
        <button className="boton-agregar-global" onClick={onClick}>
            {esProducto ? (
                <PlusIcon className="icono-agregar" />
            ) : (
                <Squares2X2Icon className="icono-agregar" />
            )}
        </button>
    );
};

export default BotonAgregar;
