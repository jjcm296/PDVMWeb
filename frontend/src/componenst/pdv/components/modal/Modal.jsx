import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    const [importeRecibido, setImporteRecibido] = useState('');

    const handleConfirm = () => {
        if (!importeRecibido || isNaN(importeRecibido)) {
            alert('Por favor, ingresa un importe válido');
            return;
        }
        onConfirm(parseFloat(importeRecibido));
        setImporteRecibido('');
    };

    if (!isOpen) return null;

    return (
        <div className="modal-agregar-producto">
            <div className="modal-contenido">
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
                        Cancelar
                    </button>
                    <button className="boton-confirmar" onClick={handleConfirm}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
