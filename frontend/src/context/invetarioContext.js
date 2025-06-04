// src/context/invetarioContext.js
import { createContext, useContext, useState } from "react";
import { apiGetInventario } from "../api/apiInventario";

const InventarioContext = createContext();

export const useInventario = () => useContext(InventarioContext);

export const InventarioProvider = ({ children }) => {
    const [inventario, setInventario] = useState([]);
    const [cargando, setCargando] = useState(false);

    const loadInventario = async () => {
        try {
            setCargando(true);
            const data = await apiGetInventario();
            setInventario(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error cargando inventario:", error);
        } finally {
            setCargando(false);
        }
    };

    return (
        <InventarioContext.Provider value={{ inventario, cargando, loadInventario }}>
            {children}
        </InventarioContext.Provider>
    );
};
