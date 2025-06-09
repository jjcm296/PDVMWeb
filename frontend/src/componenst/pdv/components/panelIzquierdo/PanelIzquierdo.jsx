import React, { useEffect, useState } from 'react';
import Buscador from '../../../ui/buscador/Buscador';
import VistaToggle from '../switchVista/VistaToggle';
import TarjetaProducto from '../tarjetasProducto/TarjetaProducto';
import TarjetaProductoBarra from '../tarjetasProducto/TarjetaProductoBarra';
import './PanelIzquierdo.css';
import BotonFiltro from "../../../ui/botonFiltro/BotonFiltro";
import { useProductos } from "../../../../context/productosContext";
import { useCarrito } from "../../../../context/carritoContext";

const PanelIzquierdo = () => {
    const [vista, setVista] = useState('grid');
    const [busqueda, setBusqueda] = useState('');
    const [seleccionados, setSeleccionados] = useState([]);

    const { productosOriginales, loadProductos } = useProductos();
    const [productosOrdenados, setProductosOrdenados] = useState([]);

    const { agregarProducto } = useCarrito();

    useEffect(() => {
        loadProductos();
    }, []);

    useEffect(() => {
        if (productosOriginales) {
            setProductosOrdenados([...productosOriginales]);
        }
    }, [productosOriginales]);

    const productosFiltrados = productosOrdenados.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const handleAgregar = (producto) => {
        agregarProducto({
            id: producto.idProducto,
            nombre: producto.nombre,
            precio: producto.precio
        });

        if (!seleccionados.includes(producto.idProducto)) {
            setSeleccionados([...seleccionados, producto.idProducto]);
        }
    };

    return (
        <div className="panel-izquierdo-contenedor">
            <div className="barra-superior">
                <Buscador onBuscar={setBusqueda} />
                <BotonFiltro />
            </div>

            <div className={`productos-scroll ${vista === 'list' ? 'modo-lista' : ''}`}>
                {productosFiltrados.map((producto, index) =>
                    vista === 'grid' ? (
                        <TarjetaProducto
                            key={producto.idProducto || index}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            onAgregar={() => handleAgregar(producto)}
                            onClick={() => handleAgregar(producto)}
                            seleccionado={seleccionados.includes(producto.idProducto)}
                            modoPDV={true}
                        />
                    ) : (
                        <TarjetaProductoBarra
                            key={producto.idProducto || index}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            onAgregar={() => handleAgregar(producto)}
                        />
                    )
                )}
            </div>

            <div className="switch-inferior">
                <VistaToggle vista={vista} onCambiarVista={setVista} />
            </div>
        </div>
    );
};

export default PanelIzquierdo;