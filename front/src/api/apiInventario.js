import axios from "axios";
import { API_BASE_URL } from "../config/config.js";

export const apiGetInventario = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventory`);
        // Asegurarse de que sea array
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error("[Error Inventario]", error);
        return [];
    }
}
