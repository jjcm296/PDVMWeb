import { createContext, useContext, useState } from "react";
import { apiGetAllProductos } from "../api/apiProductos";
import { apiGetProductosStock } from "../api/apiSuministro";

const ProductosContext = createContext();

export const useProductos = () => useContext(ProductosContext);


export const ProductosProvider = ({ children }) => {
    const [productosOriginales, setProductosOriginales] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(false);

    const loadProductos = async () => {
        try {
            setCargandoProductos(true);
            const [productos, stockList] = await Promise.all([
                apiGetAllProductos(),
                apiGetProductosStock()
            ]);

            const productosConStock = productos.map((p) => {
                const stock = stockList.find((s) => s.idProducto === p.idProducto);
                return {
                    ...p,
                    stockActual: stock ? stock.stockActual : 0
                };
            });

            setProductosOriginales(productosConStock);
        } catch (error) {
            console.error("Error cargando productos:", error);
        } finally {
            setCargandoProductos(false);
        }
    };

    return (
        <ProductosContext.Provider
            value={{
                productosOriginales,
                setProductosOriginales,
                cargandoProductos,
                loadProductos,
            }}
        >
            {children}
        </ProductosContext.Provider>
    );
};
