import { createContext, useContext, useState } from "react";
import { apiGetProductosStock } from "../api/apiSuministro";

const SuministroProductosContext = createContext();

export const useSuministroProductos = () => useContext(SuministroProductosContext);

export const SuministroProductosProvider = ({ children }) => {
    const [productosSuministro, setProductosSuministro] = useState([]);
    const [cargandoSuministro, setCargandoSuministro] = useState(false);

    const loadProductosSuministro = async () => {
        try {
            setCargandoSuministro(true);
            const response = await apiGetProductosStock();
            setProductosSuministro(Array.isArray(response) ? response : []);
        } catch (error) {
            console.error("Error cargando productos de suministro:", error);
        } finally {
            setCargandoSuministro(false);
        }
    };

    return (
        <SuministroProductosContext.Provider
            value={{
                productosSuministro,
                setProductosSuministro,
                cargandoSuministro,
                loadProductosSuministro,
            }}
        >
            {children}
        </SuministroProductosContext.Provider>
    );
};
