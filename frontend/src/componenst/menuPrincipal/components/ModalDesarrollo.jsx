import React from 'react';
import './ModalDesarrollo.css';

const ModalDesarrollo = ({ onClose }) => {
    return (
        <div className="modal-desarrollo-overlay">
            <div className="modal-desarrollo">
                <img src="/logo/logo.png" alt="Logo empresa" className="modal-logo" />
                <h2>Funcionalidad en desarrollo</h2>
                <p>Estamos trabajando para habilitar esta sección muy pronto. ¡Gracias por tu paciencia!</p>
                <button className="modal-desarrollo-boton" onClick={onClose}>Entendido</button>
            </div>
        </div>
    );
};

export default ModalDesarrollo;
