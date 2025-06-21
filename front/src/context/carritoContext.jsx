import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    const agregarProducto = (productoNuevo) => {
        setProductosCarrito(prev => {
            const index = prev.findIndex(p => p.id === productoNuevo.id);
            if (index !== -1) {
                const nuevos = [...prev];
                nuevos[index] = {
                    ...nuevos[index],
                    cantidad: nuevos[index].cantidad + 1
                };
                return nuevos;
            }
            return [...prev, { ...productoNuevo, cantidad: 1 }];
        });
    };

    const eliminarProducto = (id) => {
        setProductosCarrito(prev =>
            prev
                .map(p => p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p)
                .filter(p => p.cantidad > 0)
        );
    };

    const vaciarCarrito = () => {
        setProductosCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{
            productosCarrito,
            agregarProducto,
            eliminarProducto,
            vaciarCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => useContext(CarritoContext);
