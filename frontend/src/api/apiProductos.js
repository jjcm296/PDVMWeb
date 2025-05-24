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
        const formData = new FormData();
        formData.append("nombre", producto.nombre);
        formData.append("precio", producto.precio);
        formData.append("categoriaId", producto.categoriaId);

        if (producto.descripcion) formData.append("descripcion", producto.descripcion);
        if (producto.marca) formData.append("marca", producto.marca);
        if (producto.codigoBarra) formData.append("codigoBarra", producto.codigoBarra);
        if (producto.imagen) formData.append("imagen", producto.imagen);

        const response = await axios.post(`${API_BASE_URL}/productos`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error al agregar el producto:', error);
        return null;
    }
};