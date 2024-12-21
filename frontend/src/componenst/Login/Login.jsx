import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
    const navigate = useNavigate();

    return (
        <header className="menu-login">
            <div className="login">
                <h1>ENTRA EN TU CUENTA</h1>
                <div className="input-div">
                    <input type="text" placeholder="Correo electrónico" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="botones-login">
                    <button className="iniciar-sesion" id="iniciar-sesion">iniciar sesión</button>
                    <button className="contraseña">¿Olvidaste tu contraseña?</button>
                </div>
            </div>

            <div className="barra-vertical">
                <div className="linea-vertical"></div>
            </div>

            <div className="login">
                <h1 className="login-text">
                    ¿No tienes cuenta?. <span>Regístrate y haz tus compras más rápido.</span>
                </h1>
                <div>
                    <button onClick={() => navigate ("/register")} className="iniciar-sesion" id="crear-cuenta">crear cuenta</button>
                </div>
            </div>
        </header>
    );
};

export default Login;