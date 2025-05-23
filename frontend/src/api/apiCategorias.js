import axios from "axios";
import { API_BASE_URL } from "../config/config.js";

export const apiGetAllCategorias = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categorias`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}

export const apiAddCategoria = async (categoria) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/categorias`, categoria);
        return response.data;
    } catch (error) {
        console.error("Error adding category:", error);
        throw error;
    }
}