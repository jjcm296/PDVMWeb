import axios from "axios";
import { API_BASE_URL } from "../config/config";

export const ApiAddSuministro = async (suministro) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/suministros`, suministro);
        return response.data;
    } catch (error) {
        console.error("Error al registrar el suministro:", error);
        return false;
    }
};

export const apiGetProductosStock = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/productos/con-stock`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los productos con stock: ", error);
        return false;
    }
};
