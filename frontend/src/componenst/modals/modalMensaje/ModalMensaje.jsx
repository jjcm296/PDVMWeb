import React from 'react';
import './ModalMensaje.css';

const ModalMensaje = ({ mensaje, tipo = 'info', onClose }) => {
    if (!mensaje) return null;

    return (
        <div className="modal-overlay-msg">
            <div className={`modal-mensaje ${tipo}`}>
                <p className="mensaje-texto">{mensaje}</p>
                <button className="boton-cerrar-msg" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default ModalMensaje;
