import React, { useState } from 'react';
import './ModalRegistrarSuministro.css';
import CustomInput from "../../ui/customInput/CustomInput";

const ModalRegistrarSuministro = ({ producto, onClose, onSubmit }) => {
    const [modoActivo, setModoActivo] = useState('unidad'); // 'unidad' o 'caja'
    const [cantidadUnidad, setCantidadUnidad] = useState('');
    const [cajas, setCajas] = useState('');
    const [productosPorCaja, setProductosPorCaja] = useState('');

    const handleTabChange = (modo) => {
        setModoActivo(modo);
        setCantidadUnidad('');
        setCajas('');
        setProductosPorCaja('');
    };

    const handleSubmit = async () => {
        if (modoActivo === 'unidad') {
            if (!cantidadUnidad || cantidadUnidad <= 0) {
                alert('Ingresa una cantidad válida de unidades.');
                return;
            }

            const ok = await onSubmit({
                productoId: producto.idProducto,
                tipo: 'unidad',
                cantidad: parseInt(cantidadUnidad)
            });

            if (ok) onClose();
        } else {
            if (!cajas || !productosPorCaja || cajas <= 0 || productosPorCaja <= 0) {
                alert('Ingresa valores válidos para cajas y productos por caja.');
                return;
            }

            const ok = await onSubmit({
                productoId: producto.idProducto,
                tipo: 'caja',
                cantidad: parseInt(cajas),
                productosPorCaja: parseInt(productosPorCaja)
            });

            if (ok) onClose();
        }
    };

    return (
        <div className="modal-agregar-producto">
            <div className="tabs-navegador-real">
                <div
                    className={`pestana ${modoActivo === 'unidad' ? 'activa' : ''}`}
                    onClick={() => handleTabChange('unidad')}
                >
                    🧊 Por Unidad
                </div>
                <div
                    className={`pestana ${modoActivo === 'caja' ? 'activa' : ''}`}
                    onClick={() => handleTabChange('caja')}
                >
                    📦 Por Caja
                </div>
            </div>

            <div className="modal-contenido">
                <h2 className="modal-titulo">Registrar <span>Suministro</span></h2>

                <div className="contenido-tab">
                    <p><strong>Producto:</strong> {producto.nombre}</p>

                    {modoActivo === 'unidad' ? (
                        <div className="campo-entrada">
                            <CustomInput
                                name="cantidad"
                                type="number"
                                value={cantidadUnidad}
                                onChange={(e) => setCantidadUnidad(e.target.value)}
                            />
                            <label htmlFor="cantidad">Cantidad en unidades</label>
                        </div>
                    ) : (
                        <>
                            <div className="campo-entrada">
                                <CustomInput
                                    name="cajas"
                                    type="number"
                                    value={cajas}
                                    onChange={(e) => setCajas(e.target.value)}
                                />
                                <label htmlFor="cajas">Número de cajas</label>
                            </div>

                            <div className="campo-entrada">
                                <CustomInput
                                    name="productosPorCaja"
                                    type="number"
                                    value={productosPorCaja}
                                    onChange={(e) => setProductosPorCaja(e.target.value)}
                                />
                                <label htmlFor="productosPorCaja">Productos por caja</label>
                            </div>
                        </>
                    )}
                </div>

                <div className="modal-botones">
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalRegistrarSuministro;
