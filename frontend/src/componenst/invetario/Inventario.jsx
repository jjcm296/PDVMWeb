import React, { useEffect, useState } from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import './Inventario.css';

import TarjetaInventario from './components/TarjetaInventario';
import TarjetaInventarioBarra from './components/TarjetaInventarioBarra';
import { apiGetInventario } from '../../api/apiInventario';

const Inventario = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [inventario, setInventario] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiGetInventario();
            setInventario(data);
        };
        fetchData();
    }, []);

    const inventarioFiltrado = inventario.filter(item =>
        item.nombreProducto.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda} />
                </div>

                <div className={`inventario-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
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
