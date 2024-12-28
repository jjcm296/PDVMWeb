import React, {useEffect, useState} from 'react';
import "./CodigoVerificacion.css"
import {useNavigate} from "react-router-dom";

const CodigoVerificacion = () => {
    const [codigo,setCodigo] = useState(["","","","","",""]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1 && /^[0-9]$/.test(value)) {
            const newCodigo = [...codigo];
            newCodigo[index] = value;
            setCodigo(newCodigo);

            // Pasar a la siguiente entrada cuando se ingresa un dígito
            if (index < 5 && value !== "") {
                document.getElementById(`digito-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const codigoIngresado = codigo.join("");
        console.log("Código ingresado:", codigoIngresado);
        // Aquí podrías enviar el código al servidor para verificarlo
    };

    const [correo, setCorreo] = useState('');

    useEffect(() => {
        // Obtener el correo almacenado en localStorage
        const correoGuardado = localStorage.getItem('correo');
        if (correoGuardado) {
            setCorreo(correoGuardado);
        }
    }, []);

    const navigate = useNavigate();
    return (
        <header className="header-codigo-verificacion">
            <h1>Ingrese el código de verificación enviado a:</h1>
            <p>{correo}</p>
            <form className="codigo-verificacion" onSubmit={handleSubmit}>
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
                <button onClick={()=> navigate("/register-user")} type="submit" className="boton-verificar">
                    Verificar
                </button>
            </form>
        </header>
    );
};

export default CodigoVerificacion;