import React, { useState } from "react";
import "./ModalDispositivo.css";
import DispositivoCard from "./components/DispositivoCard";

const ModalDispositivos = ({ position, onClose }) => {
    const [dispositivos, setDispositivos] = useState([
        { nombre: "Galaxy A1", conectado: true },
        { nombre: "iPhone 13", conectado: false },
        { nombre: "Moto G9", conectado: true },
        { nombre: "Redmi Note 10", conectado: false }
    ]);

    const toggleConexion = (index) => {
        setDispositivos(prev =>
            prev.map((d, i) =>
                i === index ? { ...d, conectado: !d.conectado } : d
            )
        );
    };

    return (
        <div className="modal-dispositivos" style={{ top: position.top, left: position.left }}>
            <div className="modal-header">
                <h4>Dispositivos disponibles</h4>
                <button className="cerrar-btn" onClick={onClose}>×</button>
            </div>
            <div className="modal-contenido">
                {dispositivos.length === 0 ? (
                    <p className="sin-dispositivos">No hay dispositivos conectados.</p>
                ) : (
                    <div className="tarjetas-noti">
                        {dispositivos.map((d, i) => (
                            <DispositivoCard
                                key={i}
                                nombre={d.nombre}
                                conectado={d.conectado}
                                onToggle={() => toggleConexion(i)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalDispositivos;
