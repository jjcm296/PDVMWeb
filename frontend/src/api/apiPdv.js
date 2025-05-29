import axios from "axios";
import { API_BASE_URL } from "../config/config.js";

export const apiAddVenta = async (venta) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/ventas`, venta);
        return response.data;
    } catch (error) {
        console.log("error al crear la venta");
        return error;
    }
}