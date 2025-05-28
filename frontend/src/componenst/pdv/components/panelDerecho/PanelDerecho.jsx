import React, { useState } from 'react';
import './PanelDerecho.css';
import ProductoSeleccionado from './components/productoSeleccionado/ProductoSeleccionado';
import TotalAPagar from './components/totalAPagar/TotalAPagar';
import BotonesPago from './components/botonesPago/BotonesPago';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Modal from '../modal/Modal';
import { useCarrito } from '../../../../context/carritoContext';

const PanelDerecho = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const { productosCarrito } = useCarrito();

    const total = productosCarrito.reduce((acc, p) => acc + parseFloat(p.precio), 0).toFixed(2);

    const handleConfirmarPago = (importeRecibido) => {
        alert(`¡Venta registrada!\nImporte recibido: $${importeRecibido.toFixed(2)}\nCambio: $${(importeRecibido - total).toFixed(2)}`);
        setMostrarModal(false);
    };

    return (
        <div className="panel-derecho">
            <h2 className="titulo-carrito">
                <ShoppingCartIcon className="icono-carrito"/>
                Carrito de compras
            </h2>

            <div className="lista-productos">
                {productosCarrito.map((producto) => (
                    <ProductoSeleccionado
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                    />
                ))}
            </div>

            <div className="total-y-acciones">
                <TotalAPagar total={total}/>
                <BotonesPago onPagar={() => setMostrarModal(true)} />
            </div>

            <Modal
                isOpen={mostrarModal}
                onClose={() => setMostrarModal(false)}
                onConfirm={handleConfirmarPago}
            />
        </div>
    );
};

export default PanelDerecho;
