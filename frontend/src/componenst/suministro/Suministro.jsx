import React, { useEffect, useState } from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import TarjetaProducto from '../pdv/components/tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../pdv/components/tarjetasProducto/TarjetaProductoBarra';
import ModalRegistrarSuministro from '../suministro/modalSuministrarProducto/ModalRegistrarSuministro';
import './Suministro.css';
import { apiGetProductosConStock } from '../../api/apiProductos';
import {ApiAddSuministro} from "../../api/apiSuministro";

const Suministro = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargar = async () => {
            const data = await apiGetProductosConStock();
            console.log(data)
            setProductos(data);
        };
        cargar();
    }, []);

    const productosFiltrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const abrirModal = (producto) => {
        setProductoSeleccionado(producto);
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setProductoSeleccionado(null);
        setMostrarModal(false);
    };

    const handleSubmit = async ({ productoId, cantidad }) => {
        console.log("Suministro a registrar:", { productoId, cantidad });
        const response = await ApiAddSuministro({ productoId, cantidad });

        if (response) {
            cerrarModal();
            const data = await apiGetProductosConStock();
            setProductos(data);
        } else {
            alert("No se pudo registrar el suministro.");
        }
    };

    return (
        <div className="pantalla-productos">
            <div className="productos-scroll-contenedor">
                <div className="barra-superior">
                    <Buscador onBuscar={setBusqueda} />
                </div>

                <div className={`productos-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                    {productosFiltrados.map((producto, index) =>
                        vista === 'grid' ? (
                            <TarjetaProducto
                                key={producto.idProducto}
                                nombre={producto.nombre}
                                onClick={() => abrirModal(producto)}
                            />

                        ) : (
                            <TarjetaProductoBarra
                                key={producto.idProducto}
                                producto={producto.nombre}
                                onClick={() => abrirModal(producto)}
                            />
                        )
                    )}
                </div>

                <div className="switch-inferior">
                    <VistaToggle vista={vista} onCambiarVista={setVista} />
                </div>
            </div>

            {mostrarModal && productoSeleccionado && (
                <ModalRegistrarSuministro
                    producto={productoSeleccionado}
                    onClose={cerrarModal}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default Suministro;
