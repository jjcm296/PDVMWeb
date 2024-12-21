import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CrearCuenta.css";

const CrearCuenta = () => {
    const navigate = useNavigate();
    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [mostrarConfirmarContrasena, setMostrarConfirmarContrasena] = useState(false);
    const [recibirPromociones, setRecibirPromociones] = useState(false);

    const toggleMostrarContrasena = () => {
        setMostrarContrasena(!mostrarContrasena);
    };
    const toggleMostrarConfirmarContrasena = () => {
        setMostrarConfirmarContrasena(!mostrarConfirmarContrasena);
    };
    const toggleRecibirPromociones = () => {
        setRecibirPromociones(!recibirPromociones);
    };

    return (
        <header className="registrarse">
            <div className="div-text">
                <h1 className="titulo">crear cuenta</h1>
                <p className="texto">Ingresa tus datos para que seas parte de PDVW</p>
            </div>
            <form action="" className="datos-usuario">
                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="nombre" required/>
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="apellido-paterno" required/>
                    <label htmlFor="nombre">Apellido paterno</label>
                </div>
                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="apellido-materno" required/>
                    <label htmlFor="nombre">Apellido materno</label>
                </div>
                <div className="campo-entrada">
                    <select className="input-campo" id="genero" required>
                        <option value="" disabled selected hidden></option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Mayate</option>
                        <option value="otro">Otro/Prefiero no decirlo</option>
                    </select>
                    <label htmlFor="genero">Género</label>
                </div>

                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="telefono" required/>
                    <label htmlFor="telefono">Télefono</label>
                </div>

                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="user-name" required/>
                    <label htmlFor="nombre">User name</label>
                </div>


                <div className="campo-entrada">
                    <input className="input-campo" type="email" id="gmail" required/>
                    <label htmlFor="nombre">Correo electrónico</label>
                </div>

                <div className="campo-entrada">
                    <div className="input-contrasena-container">
                        <input
                            className="input-campo"
                            type={mostrarContrasena ? "text" : "password"}
                            id="contrasena"
                            required
                        />
                        <label htmlFor="contrasena">Contraseña</label>
                        <i
                            className={`fa ${mostrarContrasena ? "fa-eye-slash" : "fa-eye"}`}
                            onClick={toggleMostrarContrasena}
                        ></i>
                    </div>
                </div>
                <div className="campo-entrada">
                    <div className="input-contrasena-container">
                        <input
                            className="input-campo"
                            type={mostrarConfirmarContrasena ? "text" : "password"}
                            id="confirmar-contrasena"
                            required
                        />
                        <label htmlFor="contrasena">Confirmar contraseña</label>
                        <i
                            className={`fa ${mostrarConfirmarContrasena ? "fa-eye-slash" : "fa-eye"}`}
                            onClick={toggleMostrarConfirmarContrasena}
                        ></i>
                    </div>
                </div>

                <p className="texto-contrasena">Debe contener los siguientes requisitos:</p>
                <ul className="texto-contrasena">
                    <li>Debe contener mínimo 8 caracteres.</li>
                    <li>Debe incluir al menos una letra mayúscula.</li>
                    <li>Debe incluir al menos un número.</li>
                </ul>

                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="promociones"
                        checked={recibirPromociones}
                        onChange={toggleRecibirPromociones}
                    />
                    <p>Deseo recibir promociones exclusivas por correo electrónico</p>
                </div>

                <button className="boton-registrarse">Crear cuenta</button>
                <h4 className="h4">¿Ya tienes cuenta?</h4>
                <button
                    onClick={() => navigate("/login")} className="boton-iniciar-sesion">Iniciar sesión
                </button>
            </form>
        </header>
    );
};

export default CrearCuenta;