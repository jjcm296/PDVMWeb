import React, { useRef, useEffect } from "react";
import "./ModalNotificaciones.css";
import NotificacionCard from "./components/NotificacionCard";

const ModalNotificaciones = ({ position, onClose, notificaciones }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose(); // cierra el modal si se clickea fuera
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={modalRef}
            className="modal-notificaciones"
            style={{ top: position.top, left: position.left }}
        >
            <div className="modal-header">
                <h4>Notificaciones</h4>
                <button className="cerrar-btn" onClick={onClose}>×</button>
            </div>
            <div className="modal-contenido">
                {notificaciones.length === 0 ? (
                    <p className="sin-notis">No hay notificaciones.</p>
                ) : (
                    <div className="tarjetas-noti">
                        {notificaciones.map((n, i) => (
                            <NotificacionCard
                                key={i}
                                mensaje={n.mensaje}
                                tipo={n.tipo}
                                fecha={n.fecha}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalNotificaciones;
