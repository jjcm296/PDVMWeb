import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setProductosCarrito(prev => [...prev, producto]);
    };

    return (
        <CarritoContext.Provider value={{ productosCarrito, agregarProducto }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => useContext(CarritoContext);
