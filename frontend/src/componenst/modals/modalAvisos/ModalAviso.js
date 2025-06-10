import React, { useState, useEffect } from 'react';
import './ModalAviso.css';

const ModalAviso = () => {
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        setMostrar(true);
        localStorage.removeItem("avisoSistemaMostrado");
    }, []);


    const cerrarModal = () => setMostrar(false);

    if (!mostrar) return null;

    return (
        <div className="modal-aviso-overlay">
            <div className="modal-aviso-contenido">
                <img
                    src="/logo/Logo.png"
                    alt="Logo del sistema"
                    className="logo-aviso"
                />
                <h2>¡Estamos mejorando!</h2>
                <p>Este sistema está en constante desarrollo. Se están agregando nuevas funcionalidades para mejorar tu experiencia.</p>
                <button className="boton-cerrar" onClick={cerrarModal}>Entendido</button>
            </div>
        </div>
    );
};

export default ModalAviso;
