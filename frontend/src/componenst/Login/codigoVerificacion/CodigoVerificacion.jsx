import React, { useEffect, useState } from 'react';
import "./CodigoVerificacion.css";
import { useNavigate } from "react-router-dom";

const CodigoVerificacion = () => {
    const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);
    const [correo, setCorreo] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const correoGuardado = localStorage.getItem('correo');
        if (correoGuardado) {
            setCorreo(correoGuardado);
        }
    }, []);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1 && /^[0-9]$/.test(value)) {
            const newCodigo = [...codigo];
            newCodigo[index] = value;
            setCodigo(newCodigo);

            if (index < 5 && value !== "") {
                document.getElementById(`digito-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const codigoIngresado = codigo.join("");
        console.log("Código ingresado:", codigoIngresado);

        // Aquí podrías validar el código con tu backend
        // Por ahora solo mostramos el modal
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
        navigate("/"); // Redirige a inicio o a la página que quieras
    };

    return (
        <header className="contenedor-verificacion">
            <div className="tarjeta-verificacion">
                <div className="header-text">
                    <h1>Verifica tu correo</h1>
                    <p>Ingrese el código enviado a:</p>
                    <p className="correo">{correo}</p>
                </div>

                <form className="codigo-verificacion" onSubmit={handleSubmit}>
                    <div className="codigo-inputs">
                        {codigo.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                className="digito-verificacion"
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                id={`digito-${index}`}
                                maxLength="1"
                            />
                        ))}
                    </div>

                    <button type="submit" className="boton-verificar">
                        Verificar
                    </button>
                </form>
            </div>

            {showModal && (
                <div className="modal-exito">
                    <div className="modal-contenido">
                        <h2>¡Cuenta verificada con éxito!</h2>
                        <button onClick={cerrarModal}>Aceptar</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default CodigoVerificacion;
