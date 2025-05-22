import React from 'react';
import './BotonFiltro.css';

const BotonFiltro = ({ onClick }) => {
    return (
        <button className="boton-filtro-global" onClick={onClick}>
            A-Z ↓
        </button>
    );
};

export default BotonFiltro;
