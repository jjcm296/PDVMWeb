import React, { useState } from 'react';
import './Categorias.css';
import Buscador from '../ui/buscador/Buscador';
import BotonFiltro from '../ui/botonFiltro/BotonFiltro';
import BotonAgregar from '../ui/BotonAgregar/BotonAgregar';
import TarjetaCategoria from './components/tarjetaCategoria/TarjetaCategoria';

const categoriasMock = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    nombre: 'Productos de limpieza para el hogar'
}));

const Categorias = () => {
    const [busqueda, setBusqueda] = useState('');

    const categoriasFiltradas = categoriasMock.filter(c =>
        c.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="pantalla-categorias">
            <div className="categorias-scroll-contenedor">
                <div className="categorias-panel-full">
                    <div className="barra-superior">
                        <Buscador onBuscar={setBusqueda} />
                        <div className="botones-superior">
                            <BotonFiltro />
                            <BotonAgregar />
                        </div>
                    </div>

                    <div className="categorias-scroll">
                        {categoriasFiltradas.map((categoria, index) => (
                            <TarjetaCategoria
                                key={categoria.id}
                                nombre={categoria.nombre}
                                numero={index + 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categorias;
