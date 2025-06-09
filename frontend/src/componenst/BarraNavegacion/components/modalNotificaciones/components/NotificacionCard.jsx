import React from "react";
import {
    ExclamationTriangleIcon,
    XCircleIcon,
    CheckCircleIcon
} from "@heroicons/react/24/solid";
import "./NotificacionCard.css";

const NotificacionCard = ({ mensaje, tipo = "stock", fecha }) => {
    const iconos = {
        stock: {
            icon: <ExclamationTriangleIcon className="noti-icono amarillo" />,
            titulo: "Stock bajo"
        },
        agotado: {
            icon: <XCircleIcon className="noti-icono rojo" />,
            titulo: "Producto agotado"
        },
        venta: {
            icon: <CheckCircleIcon className="noti-icono verde" />,
            titulo: "Venta registrada"
        }
    };

    const { icon, titulo } = iconos[tipo] || iconos.stock;

    return (
        <div className={`tarjeta-noti ${tipo}`}>
            <div className="noti-izq">
                {icon}
            </div>
            <div className="noti-derecha">
                <h5 className="noti-titulo">{titulo}</h5>
                <p className="noti-mensaje">{mensaje}</p>
                {fecha && <p className="noti-fecha">{fecha}</p>}
            </div>
        </div>
    );
};

export default NotificacionCard;
