import React from 'react';
import './ModalDetalleProducto.css';

const ModalDetalleProducto = ({ producto, onClose }) => {
    if (!producto) return null;

    return (
        <div className="modal-agregar-producto">
            <div className="modal-contenido">
                <h2 className="modal-titulo">Detalle <span>Producto</span></h2>

                <div className="preview-wrapper" style={{ marginBottom: '16px' }}>
                    {producto.imagen ? (
                        <img src={producto.imagen} alt="Producto" className="preview-imagen" />
                    ) : (
                        <div className="preview-placeholder">
                            <p>Sin imagen disponible</p>
                        </div>
                    )}
                </div>

                <div className="detalle-linea">
                    <span className="detalle-label">Nombre</span>
                    <span className="detalle-valor">{producto.nombre}</span>
                </div>

                <div className="detalle-linea">
                    <span className="detalle-label">Precio</span>
                    <span className="detalle-valor">${producto.precio}</span>
                </div>

                <div className="detalle-linea">
                    <span className="detalle-label">Categoría</span>
                    <span className="detalle-valor">{producto.categoria?.nombre || 'Sin categoría'}</span>
                </div>

                <div className="detalle-linea">
                    <span className="detalle-label">Descripción</span>
                    <span className="detalle-valor">{producto.descripcion || '—'}</span>
                </div>

                <div className="detalle-linea">
                    <span className="detalle-label">Marca</span>
                    <span className="detalle-valor">{producto.marca || '—'}</span>
                </div>

                <div className="detalle-linea">
                    <span className="detalle-label">Código de barras</span>
                    <span className="detalle-valor">{producto.codigoBarra || '—'}</span>
                </div>

                <div className="modal-botones">
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalDetalleProducto;
