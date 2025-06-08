import React, { useEffect, useState } from 'react';
import Buscador from '../ui/buscador/Buscador';
import VistaToggle from '../pdv/components/switchVista/VistaToggle';
import TarjetaProducto from '../pdv/components/tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../pdv/components/tarjetasProducto/TarjetaProductoBarra';
import ModalRegistrarSuministro from '../suministro/modalSuministrarProducto/ModalRegistrarSuministro';
import './Suministro.css';
import { ApiAddSuministro, apiGetProductosStock } from "../../api/apiSuministro";

const Suministro = ({ modo }) => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [productos, setProductos] = useState([]);

    const cargarProductos = async () => {
        const data = await apiGetProductosStock();
        if (Array.isArray(data)) {
            setProductos(data);
        } else {
            console.error("Respuesta inválida del backend:", data);
            setProductos([]);
        }
    };

    useEffect(() => {
        cargarProductos();
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

    const handleSubmit = async ({ productoId, cantidad, productosPorCaja }) => {
        const response = await ApiAddSuministro({
            productoId,
            cantidad,
            ...(productosPorCaja ? { productosPorCaja } : {})
        });

        if (response) {
            cerrarModal();
            await cargarProductos();
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
                    {productosFiltrados.map((producto) =>
                        vista === 'grid' ? (
                            <TarjetaProducto
                                key={producto.idProducto}
                                nombre={producto.nombre}
                                stock={producto.stockActual}
                                mostrarStock={true}
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
                    modoFijo={modo}
                    onClose={cerrarModal}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default Suministro;
