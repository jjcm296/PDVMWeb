import React from 'react';
import './VistaToggle.css';
import { Squares2X2Icon, Bars3Icon } from '@heroicons/react/24/solid';

const VistaToggle = ({ vista, onCambiarVista }) => {
    return (
        <div className="vista-toggle">
            <div className={`switch-slider ${vista === 'grid' ? 'left' : 'right'}`} />

            <button
                className={`vista-btn ${vista === 'grid' ? 'activo' : ''}`}
                onClick={() => onCambiarVista('grid')}
                aria-label="Vista en tarjetas"
            >
                <Squares2X2Icon className="icono-toggle" />
            </button>

            <button
                className={`vista-btn ${vista === 'list' ? 'activo' : ''}`}
                onClick={() => onCambiarVista('list')}
                aria-label="Vista en lista"
            >
                <Bars3Icon className="icono-toggle" />
            </button>
        </div>
    );
};

export default VistaToggle;
