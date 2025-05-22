import React, { useState } from 'react';
import './BotonFiltro.css';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    BarsArrowDownIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    ChevronDownIcon
} from '@heroicons/react/24/solid';

const opciones = [
    { label: 'A-Z', value: 'az', icon: <ArrowDownIcon className="icono-opcion" /> },
    { label: 'Z-A', value: 'za', icon: <ArrowUpIcon className="icono-opcion" /> },
    { label: 'Nombre', value: 'nombre', icon: <BarsArrowDownIcon className="icono-opcion" /> },
    {
        label: 'Mayor precio',
        value: 'precio_mayor',
        icon: <ArrowTrendingUpIcon className="icono-opcion" />
    },
    {
        label: 'Menor precio',
        value: 'precio_menor',
        icon: <ArrowTrendingDownIcon className="icono-opcion" />
    }
];

const BotonFiltro = ({ onSelect }) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handleSeleccion = (valor, opcion) => {
        setOpcionSeleccionada(opcion);
        onSelect?.(valor);
    };

    return (
        <div className="boton-filtro-wrapper">
            <button className="boton-filtro-global">
                {opcionSeleccionada?.icon || <BarsArrowDownIcon className="icono-opcion" />}
                <ChevronDownIcon className="icono-chevron" />
            </button>

            <ul className="filtro-dropdown">
                {opciones.map((op) => (
                    <li key={op.value} onClick={() => handleSeleccion(op.value, op)}>
                        {op.icon}
                        {op.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BotonFiltro;
