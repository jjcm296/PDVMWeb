import React, {useEffect, useState} from 'react';
import './Categorias.css';
import Buscador from '../ui/buscador/Buscador';
import BotonFiltro from '../ui/botonFiltro/BotonFiltro';
import BotonAgregar from '../ui/BotonAgregar/BotonAgregar';
import TarjetaCategoria from './components/tarjetaCategoria/TarjetaCategoria';
import ModalAgregarCategoria from './modalAgregarCategoria/ModalAgregarCategoria';
import { useCategorias } from "../../context/categoriaContext";
import { apiAddCategoria } from "../../api/apiCategorias";

const Categorias = () => {
    const [busqueda, setBusqueda] = useState('');
    const { categoriesOriginal, loadingCategories, loadCategories } = useCategorias();
    const [categorias, setCategorias] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        if (categoriesOriginal) {
            setCategorias(categoriesOriginal);
        }
    }, [categoriesOriginal]);

    const categoriasFiltradas = categorias.filter(c =>
        c.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const handleAgregarCategoria = async (nuevaCategoria) => {
        try {
            const response = await apiAddCategoria({ nombre: nuevaCategoria });
            setMostrarModal(false);
            
            setCategorias(prev => [...prev, response]);
        } catch (error) {
            console.error("Error al agregar categoría:", error);
        }
    };


    return (
        <div className="pantalla-categorias">
            <div className="categorias-scroll-contenedor">
                <div className="categorias-panel-full">
                    <div className="barra-superior">
                        <Buscador onBuscar={setBusqueda} />
                        <div className="botones-superior">
                            <BotonFiltro />
                            <BotonAgregar onClick={() => setMostrarModal(true)} />
                        </div>
                    </div>

                    <div className="categorias-scroll">
                        {categoriasFiltradas.map((categoria, index) => (
                            <TarjetaCategoria
                                key={categoria.id}
                                nombre={categoria.nombre}
                                numero={index + 1}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {mostrarModal && (
                <ModalAgregarCategoria
                    onClose={() => setMostrarModal(false)}
                    onSubmit={handleAgregarCategoria}
                />
            )}
        </div>
    );
};

export default Categorias;
