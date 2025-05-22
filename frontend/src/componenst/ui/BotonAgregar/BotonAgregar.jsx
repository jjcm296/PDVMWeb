import React from 'react';
import './BotonAgregar.css';
import { PlusIcon } from '@heroicons/react/24/outline';

const BotonAgregar = ({ onClick }) => {
    return (
        <button className="boton-agregar-global" onClick={onClick}>
            <PlusIcon className="icono-agregar" />
        </button>
    );
};

export default BotonAgregar;
