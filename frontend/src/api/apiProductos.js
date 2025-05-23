import axios from 'axios';
import { API_BASE_URL } from '../config/config.js';

export const apiGetAllProductos = async () => {
    try {
         const response = await axios.get(`${API_BASE_URL}/productos`);
         return response.data;
    } catch (error) {
         console.error('Error al obtener los productos:', error);
         return null;
    }
}

export const apiAddProductos = async (producto) => {
   try {
       const response = await axios.post( `${API_BASE_URL}/productos`, producto);
       return response.data;
   } catch (error) {
         console.error('Error al agregar el producto:', error);
         return null;
   }
}