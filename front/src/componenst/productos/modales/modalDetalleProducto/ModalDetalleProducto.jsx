import React, { useState } from 'react';
import './ModalDetalleProducto.css';

const ModalDetalleProducto = ({ producto, onClose }) => {
    const [confirmandoEliminar, setConfirmandoEliminar] = useState(false);

    if (!producto) return null;

    const handleEliminar = () => {
        setConfirmandoEliminar(true);
    };

    const confirmarEliminacion = () => {
        alert(`Producto "${producto.nombre}" eliminado`);
        setConfirmandoEliminar(false);
        onClose();
    };

    const cancelarEliminacion = () => {
        setConfirmandoEliminar(false);
    };

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

                <div className="detalle-linea"><span className="detalle-label">Nombre</span><span className="detalle-valor">{producto.nombre}</span></div>
                <div className="detalle-linea"><span className="detalle-label">Precio</span><span className="detalle-valor">${producto.precio}</span></div>
                <div className="detalle-linea"><span className="detalle-label">Categoría</span><span className="detalle-valor">{producto.categoria?.nombre || 'Sin categoría'}</span></div>
                <div className="detalle-linea"><span className="detalle-label">Descripción</span><span className="detalle-valor">{producto.descripcion || '—'}</span></div>
                <div className="detalle-linea"><span className="detalle-label">Marca</span><span className="detalle-valor">{producto.marca || '—'}</span></div>
                <div className="detalle-linea"><span className="detalle-label">Código de barras</span><span className="detalle-valor">{producto.codigoBarra || '—'}</span></div>

                <div className="modal-botones">
                    <button className="btn-eliminar" onClick={handleEliminar}>Eliminar</button>
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>

            {confirmandoEliminar && (
                <div className="modal-confirmacion-overlay">
                    <div className="modal-confirmacion">
                        <img src="/logo/Logo.png" alt="logo" className="modal-logo" />
                        <h3>¿Estás seguro de eliminar este producto?</h3>
                        <div className="modal-botones">
                            <button className="btn-eliminar" onClick={confirmarEliminacion}>Confirmar</button>
                            <button onClick={cancelarEliminacion}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalDetalleProducto;
