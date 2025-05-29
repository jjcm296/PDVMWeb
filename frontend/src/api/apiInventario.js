import axios from "axios";
import { API_BASE_URL } from "../config/config.js";

export const apiGetInventario = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventory`);
        return response.data;
    }catch (error) {
        return error;
    }
}