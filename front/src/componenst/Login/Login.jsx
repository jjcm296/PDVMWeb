import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../ui/customInput/CustomInput";
import CustomButton from "../ui/customButton/CustomButton";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!email || !password) return;

        // Aquí puedes agregar la lógica de autenticación
    };

    return (
        <header className="menu-login">
            <div className="login">
                <div className="header-text">
                    <h1>ENTRA EN TU CUENTA</h1>
                    <p>Accede a tu perfil y gestiona tu cuenta</p>
                </div>

                <div className="input-div">
                    <div className="campo-entrada">
                        <CustomInput
                            type="text"
                            placeholder="Correo o username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            required
                            className={`${submitted && !email ? "input-error" : ""}`}
                        />
                        <label htmlFor="email">Correo o username</label>
                        {submitted && !email && (
                            <span className="mensaje-error">Ingrese su correo</span>
                        )}
                    </div>

                    <div className="campo-entrada">
                        <div className="input-contrasena-container">
                            <CustomInput
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                required
                                className={`${submitted && !password ? "input-error" : ""}`}
                            />
                            <label htmlFor="password">Password</label>
                            <i
                                className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                        {submitted && !password && (
                            <span className="mensaje-error">Ingrese su contraseña</span>
                        )}
                    </div>
                </div>

                <div className="botones-login">
                    <CustomButton onClick={handleSubmit} className="boton-login">
                        iniciar sesión
                    </CustomButton>
                    <CustomButton onClick={() => navigate("/register")} className="boton-crear-cuenta">
                        crear cuenta
                    </CustomButton>
                    <button className="contraseña">¿Olvidaste tu contraseña?</button>
                </div>
            </div>
        </header>
    );
};

export default Login;
