import React, { useState } from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import './Inventario.css';

import TarjetaInventario from './components/TarjetaInventario';
import TarjetaInventarioBarra from './components/TarjetaInventarioBarra';
import {useInventario} from "./components/invetarioContext";

;

const Inventario = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const { inventario, cargando } = useInventario();

    const inventarioFiltrado = inventario.filter(item =>
        item.nombreProducto?.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda} />
                </div>

                {cargando ? (
                    <p style={{ textAlign: 'center' }}>Cargando inventario...</p>
                ) : inventarioFiltrado.length === 0 ? (
                    <p style={{ textAlign: 'center' }}>No se encontraron productos.</p>
                ) : (
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
