import React, { useState } from 'react';
import './Modal.css';
import ModalMensaje from '../../../modals/modalMensaje/ModalMensaje';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    const [importeRecibido, setImporteRecibido] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [tipoMensaje, setTipoMensaje] = useState('info');

    const handleConfirm = () => {
        if (!importeRecibido || isNaN(importeRecibido)) {
            setMensaje('Por favor, ingresa un importe válido');
            setTipoMensaje('error');
            return;
        }

        onConfirm(parseFloat(importeRecibido));
        setMensaje(`¡Venta registrada con éxito!`);
        setTipoMensaje('success');
        setImporteRecibido('');
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-agregar-producto">
                <div className="modal-contenido-pdv">
                    <h2 className="modal-titulo">Importe recibido</h2>
                    <input
                        type="number"
                        placeholder="Ej. 200.00"
                        value={importeRecibido}
                        onChange={(e) => setImporteRecibido(e.target.value)}
                        className="input-importe-modal"
                    />

                    <div className="botones-modal">
                        <button className="boton-cancelar" onClick={onClose}>
                            Cancelar compra
                        </button>
                        <button className="boton-confirmar" onClick={handleConfirm}>
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal de mensaje */}
            {mensaje && (
                <ModalMensaje
                    mensaje={mensaje}
                    tipo={tipoMensaje}
                    onClose={() => setMensaje('')}
                />
            )}
        </>
    );
};

export default Modal;
