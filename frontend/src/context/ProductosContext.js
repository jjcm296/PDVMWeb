// src/context/ProductosContext.js
import { createContext, useContext, useState } from "react";
import { apiGetAllProductos } from "../api/apiProductos";

const ProductosContext = createContext();

export const useProductos = () => useContext(ProductosContext);

export const ProductosProvider = ({ children }) => {
    const [productosOriginales, setProductosOriginales] = useState(null);
    const [cargandoProductos, setCargandoProductos] = useState(false);

    const loadProductos = async () => {
        if (!productosOriginales && !cargandoProductos) {
            try {
                setCargandoProductos(true);
                const response = await apiGetAllProductos();
                setProductosOriginales(response);
            } catch (error) {
                console.error("Error cargando productos:", error);
            } finally {
                setCargandoProductos(false);
            }
        }
    };

    return (
        <ProductosContext.Provider
            value={{
                productosOriginales,
                setProductosOriginales,
                cargandoProductos,
                loadProductos, // <- método reutilizable
            }}
        >
            {children}
        </ProductosContext.Provider>
    );
};
