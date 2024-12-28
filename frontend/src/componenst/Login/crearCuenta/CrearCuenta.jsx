import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CrearCuenta.css";
import axios from "axios";

const CrearCuenta = () => {
    const navigate = useNavigate();

    // Estados para manejar los valores del formulario
    const [formData, setFormData] = useState({
        userName: "",
        correo: "",
        contrasena: "",
    });

    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [mostrarConfirmarContrasena, setMostrarConfirmarContrasena] = useState(false);

    const toggleMostrarContrasena = () => setMostrarContrasena(!mostrarContrasena);
    const toggleMostrarConfirmarContrasena = () => setMostrarConfirmarContrasena(!mostrarConfirmarContrasena);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { userName, correo, contrasena } = formData;

        const cuenta = {
            userName,
            correoElectronico: correo,
            contrasena
        };

        try {

            const response = await axios.post("http://localhost:8082/api/cuenta/guardar", cuenta, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 201) {
                console.log("Usuario registrado exitosamente");
                navigate("/verification-code");
            } else {
                console.error("Error al registrar al usuario");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <header className="crear-cuenta">
            <div className="div-text">
                <h1 className="titulo">Crear cuenta</h1>
                <p className="texto">Ingresa tus datos para que seas parte de PDVW</p>
            </div>
            <form onSubmit={handleSubmit} className="datos-usuario">
                <div className="campo-entrada">
                    <input
                        className="input-campo"
                        type="text"
                        id="user-name"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="user-name">User name</label>
                </div>
                <div className="campo-entrada">
                    <input
                        className="input-campo"
                        type="email"
                        id="gmail"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="gmail">Correo electrónico</label>
                </div>
                <div className="campo-entrada">
                    <div className="input-contrasena-container">
                        <input
                            className="input-campo"
                            type={mostrarContrasena ? "text" : "password"}
                            id="contrasena"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleChange}
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
                            name="confirmarContrasena"
                            value={formData.confirmarContrasena}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="confirmar-contrasena">Confirmar contraseña</label>
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
                        name="recibirPromociones"
                        checked={formData.recibirPromociones}
                        onChange={handleChange}
                    />
                    <p>Deseo recibir promociones exclusivas por correo electrónico</p>
                </div>
                <button type="submit" className="boton-registrarse">
                    Crear cuenta
                </button>
                <h4 className="h4">¿Ya tienes cuenta?</h4>
                <button type="button" onClick={() => navigate("/login")} className="boton-iniciar-sesion">
                    Iniciar sesión
                </button>
            </form>
        </header>
    );
};

export default CrearCuenta;