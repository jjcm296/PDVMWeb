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
import { Squares2X2Icon } from '@heroicons/react/24/outline';

const BotonFiltro = ({ onSelect }) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handleSeleccion = (valor, opcion) => {
        setOpcionSeleccionada(opcion);
        onSelect?.(valor);
    };

    const opciones = [
        { label: 'A-Z', value: 'az', icon: <ArrowDownIcon className="icono-opcion" /> },
        { label: 'Z-A', value: 'za', icon: <ArrowUpIcon className="icono-opcion" /> },
        {
            label: 'Mayor precio',
            value: 'precio_mayor',
            icon: <ArrowTrendingUpIcon className="icono-opcion color-verde" />
        },
        {
            label: 'Menor precio',
            value: 'precio_menor',
            icon: <ArrowTrendingDownIcon className="icono-opcion color-rojo" />
        },
        {
            label: 'Categoría',
            value: 'categoria',
            icon: (
                <Squares2X2Icon
                    className={`icono-opcion ${
                        opcionSeleccionada?.value === 'categoria' ? 'icono-categoria-activo' : ''
                    }`}
                />
            )
        }
    ];

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
