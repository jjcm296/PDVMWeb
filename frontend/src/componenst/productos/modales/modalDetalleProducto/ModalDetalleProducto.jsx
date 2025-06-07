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

                <div className="campo-entrada">
                    <label>Nombre</label>
                    <div className="campo-readonly">{producto.nombre}</div>
                </div>

                <div className="campo-entrada">
                    <label>Precio</label>
                    <div className="campo-readonly">${producto.precio}</div>
                </div>

                <div className="campo-entrada">
                    <label>Categoría</label>
                    <div className="campo-readonly">{producto.categoria?.nombre || 'Sin categoría'}</div>
                </div>

                <div className="campo-entrada">
                    <label>Descripción</label>
                    <div className="campo-readonly">{producto.descripcion || '—'}</div>
                </div>

                <div className="campo-entrada">
                    <label>Marca</label>
                    <div className="campo-readonly">{producto.marca || '—'}</div>
                </div>

                <div className="campo-entrada">
                    <label>Código de barras</label>
                    <div className="campo-readonly">{producto.codigoBarra || '—'}</div>
                </div>

                <div className="modal-botones">
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalDetalleProducto;
