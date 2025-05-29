import React, { useState } from 'react';
import './PanelDerecho.css';
import ProductoSeleccionado from './components/productoSeleccionado/ProductoSeleccionado';
import TotalAPagar from './components/totalAPagar/TotalAPagar';
import BotonesPago from './components/botonesPago/BotonesPago';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Modal from '../modal/Modal';
import { useCarrito } from '../../../../context/carritoContext';
import {apiAddVenta} from "../../../../api/apiPdv";

const PanelDerecho = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const { productosCarrito, eliminarProducto, vaciarCarrito } = useCarrito();

    const total = productosCarrito.reduce((acc, p) => acc + parseFloat(p.precio) * p.cantidad, 0).toFixed(2);

    const handleConfirmarPago = async (importeRecibido) => {
        const venta = {
            importeRecibido: parseFloat(importeRecibido),
            productos: productosCarrito.map((p) => ({
                idProducto: p.id,
                cantidad: p.cantidad
            }))
        };

        try {
            const respuesta = await apiAddVenta(venta);
            console.log("Venta creada:", respuesta);
            alert(`¡Venta registrada!\nImporte recibido: $${importeRecibido.toFixed(2)}\nCambio: $${(importeRecibido - total).toFixed(2)}`);
            vaciarCarrito();
        } catch (error) {
            alert("Hubo un error al registrar la venta.");
        } finally {
            setMostrarModal(false);
        }
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
                        cantidad={producto.cantidad}
                        onEliminar={() => eliminarProducto(producto.id)}
                    />
                ))}
            </div>

            <div className="total-y-acciones">
                <TotalAPagar total={total}/>
                <BotonesPago
                    onPagar={() => setMostrarModal(true)}
                    onVaciarCarrito={vaciarCarrito}
                />
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
