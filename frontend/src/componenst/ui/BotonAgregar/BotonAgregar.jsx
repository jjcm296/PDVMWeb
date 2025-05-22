import React from 'react';
import './BotonAgregar.css';

const BotonAgregar = ({ onClick }) => {
    return (
        <button className="boton-agregar-global" onClick={onClick}>
            +
        </button>
    );
};

export default BotonAgregar;
