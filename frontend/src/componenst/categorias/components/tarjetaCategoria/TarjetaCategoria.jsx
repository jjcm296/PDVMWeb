import React from 'react';
import './TarjetaCategoria.css';
import { Squares2X2Icon } from '@heroicons/react/24/solid';

const TarjetaCategoria = ({ nombre, numero }) => {
    return (
        <div className="tarjeta-categoria">
            <div className="numero-categoria">{numero}</div>
            <div className="icono-categoria-wrapper">
                <Squares2X2Icon className="icono-categoria" />
            </div>
            <span className="nombre-categoria">{nombre}</span>
        </div>
    );
};

export default TarjetaCategoria;