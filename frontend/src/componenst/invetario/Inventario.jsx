import React, { useEffect, useState } from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import './Inventario.css';

import TarjetaInventario from './components/TarjetaInventario';
import TarjetaInventarioBarra from './components/TarjetaInventarioBarra';

const Inventario = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [inventario, setInventario] = useState([]);

    useEffect(() => {
        const inventarioDemo = [
            {
                nombre: "Cargador USB-C",
                stockMinimo: 5,
                stockActual: 12,
                ventasTotales: 45,
                suministrosTotales: 50
            },
            {
                nombre: "Funda transparente",
                stockMinimo: 8,
                stockActual: 4,
                ventasTotales: 80,
                suministrosTotales: 100
            },
            {
                nombre: "Mica templada",
                stockMinimo: 15,
                stockActual: 30,
                ventasTotales: 200,
                suministrosTotales: 230
            },
            {
                nombre: "Cable Lightning",
                stockMinimo: 10,
                stockActual: 8,
                ventasTotales: 60,
                suministrosTotales: 75
            }
        ];
        setInventario(inventarioDemo);
    }, []);

    const inventarioFiltrado = inventario.filter(item =>
        item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda} />
                </div>

                <div className={`productos-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                    {inventarioFiltrado.map((item, i) =>
                        vista === 'grid' ? (
                            <TarjetaInventario key={i} {...item} />
                        ) : (
                            <TarjetaInventarioBarra key={i} {...item} />
                        )
                    )}
                </div>

                <div className="switch-inferior">
                    <VistaToggle vista={vista} onCambiarVista={setVista} />
                </div>
            </div>
        </div>
    );
};

export default Inventario;
