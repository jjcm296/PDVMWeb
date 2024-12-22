import React, { forwardRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./ModalInicialSesion.css";

// Usamos forwardRef para pasar la referencia desde el componente principal
const ModalIniciarSesion = forwardRef(({ position, onClose }, ref) => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
      navigate(path);
      onClose();
    };

    return (
        <div
            className="modal-iniciar-sesion"
            ref={ref}
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`
            }}
        >
            <button onClick={()=>handleNavigate("/login")} className="boton-cuenta">Iniciar Sesion</button>
            <button onClick={()=>handleNavigate("/register-account")} className="boton-cuenta">Crear cuenta</button>
        </div>
    );
});

export default ModalIniciarSesion;