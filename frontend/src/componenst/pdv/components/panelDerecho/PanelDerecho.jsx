import React from 'react';
import './PanelDerecho.css';
import ProductoSeleccionado from './components/productoSeleccionado/ProductoSeleccionado';
import TotalAPagar from './components/totalAPagar/TotalAPagar';
import BotonesPago from './components/botonesPago/BotonesPago';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const productosMock = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    nombre: `Producto ${i + 1}`,
    precio: (Math.random() * 100).toFixed(2)
}));

const PanelDerecho = () => {
    const total = productosMock.reduce((acc, p) => acc + parseFloat(p.precio), 0).toFixed(2);

    return (
        <div className="panel-derecho">
            <h2 className="titulo-carrito">
                <ShoppingCartIcon className="icono-carrito"/>
                Carrito de compras
            </h2>

            <div className="lista-productos">
                {productosMock.map((producto) => (
                    <ProductoSeleccionado
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                    />
                ))}
            </div>

            <div className="total-y-acciones">
                <TotalAPagar total={total}/>
                <BotonesPago/>
            </div>
        </div>
    );
};

export default PanelDerecho;
