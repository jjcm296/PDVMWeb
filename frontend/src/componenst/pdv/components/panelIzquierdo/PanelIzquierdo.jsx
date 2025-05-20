import React, { useState } from 'react';
import Buscador from '../../../ui/buscador/Buscador';
import VistaToggle from '../switchVista/VistaToggle';
import TarjetaProducto from '../tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../tarjetasProducto/TarjetaProductoBarra';
import './PanelIzquierdo.css';

const productosMock = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    nombre: `Producto ${i + 1}`
}));

const PanelIzquierdo = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productosMock.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="panel-izquierdo-contenedor">
            <div className="barra-superior">
                <Buscador onBuscar={setBusqueda}/>
            </div>

            <div className={`productos-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                {productosFiltrados.map(producto =>
                    vista === 'grid' ? (
                        <TarjetaProducto key={producto.id} nombre={producto.nombre}/>
                    ) : (
                        <TarjetaProductoBarra key={producto.id} nombre={producto.nombre}/>
                    )
                )}
            </div>


            <div className="switch-inferior">
                <VistaToggle vista={vista} onCambiarVista={setVista}/>
            </div>
        </div>
    );
};

export default PanelIzquierdo;
