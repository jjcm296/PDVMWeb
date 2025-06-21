import React, { useState, useEffect } from 'react';
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
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchInventario = async () => {
            setCargando(true);
            const data = await apiGetInventario();
            setInventario(data);
            setCargando(false);
        };

        fetchInventario();
    }, []);

    const inventarioFiltrado = inventario.filter(item =>
        item.nombreProducto?.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda} />
                </div>

                {!cargando && inventarioFiltrado.length > 0 && (
                    <div className={`inventario-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                        {inventarioFiltrado.map((item, i) =>
                            vista === 'grid' ? (
                                <TarjetaInventario key={i} {...item} />
                            ) : (
                                <TarjetaInventarioBarra key={i} {...item} />
                            )
                        )}
                    </div>
                )}

                <div className="switch-inferior">
                    <VistaToggle vista={vista} onCambiarVista={setVista} />
                </div>
            </div>
        </div>
    );
};

export default Inventario;
