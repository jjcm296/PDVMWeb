import React, { forwardRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./ModalInicialSesion.css";
import { UserIcon } from "@heroicons/react/24/solid";

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
            <div className="modal-header">
                <UserIcon className="modal-avatar" />
                <span className="modal-titulo">¡Bienvenido!</span>
            </div>
            <button onClick={() => handleNavigate("/login")} className="boton-cuenta iniciar">Iniciar sesión</button>
            <button onClick={() => handleNavigate("/register")} className="boton-cuenta crear">Crear cuenta</button>
        </div>
    );
});

export default ModalIniciarSesion;
