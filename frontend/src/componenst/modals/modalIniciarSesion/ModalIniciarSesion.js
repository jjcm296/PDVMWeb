import React, { forwardRef } from 'react';
import "./ModalInicialSesion.css";

// Usamos forwardRef para pasar la referencia desde el componente principal
const ModalIniciarSesion = forwardRef(({ position }, ref) => {
    return (
        <div
            className="modal-iniciar-sesion"
            ref={ref} // Asignar la referencia aquí
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`
            }}
        >
            <button className="boton-cuenta">Iniciar Sesion</button>
            <button className="boton-cuenta">Crear cuenta</button>
        </div>
    );
});

export default ModalIniciarSesion;