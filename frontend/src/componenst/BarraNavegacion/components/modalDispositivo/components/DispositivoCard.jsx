import React from "react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import "./DispositivoCard.css";

const DispositivoCard = ({ nombre, conectado, onToggle }) => {
    return (
        <div className={`tarjeta-dispositivo ${conectado ? "conectado" : "desconectado"}`}>
            <div className="dispositivo-icono">
                <DevicePhoneMobileIcon className="icono-cel" />
            </div>

            <div className="dispositivo-info-wrapper">
                <div className="dispositivo-detalles">
                    <h5 className="dispositivo-nombre">{nombre}</h5>
                    <span className={`estado ${conectado ? "verde" : "gris"}`}>
                        {conectado ? "Conectado" : "Disponible"}
                    </span>
                </div>
                <div className="boton-wrapper">
                    <button
                        className={`boton-toggle ${conectado ? "desconectar" : "conectar"}`}
                        onClick={onToggle}
                    >
                        {conectado ? "Desconectar" : "Conectar"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DispositivoCard;
