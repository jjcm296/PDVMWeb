import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiGetInventario } from '../api/apiInventario';

const InventarioContext = createContext();

export const InventarioProvider = ({ children }) => {
    const [inventario, setInventario] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiGetInventario();
            setInventario(data);
            setCargando(false);
        };
        fetchData();
    }, []); // ⚠️ Solo una vez al montar

    return (
        <InventarioContext.Provider value={{ inventario, cargando }}>
            {children}
        </InventarioContext.Provider>
    );
};

export const useInventario = () => useContext(InventarioContext);
