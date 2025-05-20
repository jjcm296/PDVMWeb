import React, { useState } from 'react';
import './Buscador.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Buscador = ({ placeholder = "Buscar...", onBuscar = () => {} }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onBuscar(value);
    };

    const handleClick = () => {
        onBuscar(inputValue);
    };

    return (
        <div className="contenedor-buscador">
            <input
                type="text"
                className="input-buscador"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
            />
            <button className="boton-buscador" onClick={handleClick} aria-label="Buscar">
                <MagnifyingGlassIcon className="icono-busqueda" />
            </button>
        </div>
    );
};

export default Buscador;
