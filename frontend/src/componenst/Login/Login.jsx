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
                        />
                        <label htmlFor="email">Correo o username</label>
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
                            />
                            <label htmlFor="password">Password</label>
                            <i
                                className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                    </div>
                </div>

                <div className="botones-login">
                    <CustomButton className="boton-login">iniciar sesión</CustomButton>
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
