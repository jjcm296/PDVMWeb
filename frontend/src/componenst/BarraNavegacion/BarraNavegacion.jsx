import React, { useState, useRef, useEffect } from 'react';
import "./BarraNavegacion.css";
import ModalIniciarSesion from "../modals/modalIniciarSesion/ModalIniciarSesion";
import ModalNotificaciones from "./components/modalNotificaciones/ModalNotificaciones";
import ModalDispositivos from "./components/modalDispositivo/ModalDispositivo";
import { useNavigate, useLocation } from "react-router-dom";
import {
    UserIcon,
    BellIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";

const BarraNavegacion = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const formatearFechaHora = (fecha) =>
        fecha.toLocaleString("es-MX", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [notifPosition, setNotifPosition] = useState({ top: 0, left: 0 });
    const [mobileModalPosition, setMobileModalPosition] = useState({ top: 0, left: 0 });

    const [notificaciones, setNotificaciones] = useState([
        { mensaje: "Venta registrada exitosamente", tipo: "venta", fecha: formatearFechaHora(new Date()) },
        { mensaje: "Producto Doritos tiene stock bajo", tipo: "stock", fecha: formatearFechaHora(new Date()) },
        { mensaje: "Producto Coca 2L se agotó", tipo: "agotado", fecha: formatearFechaHora(new Date()) }
    ]);

    const loginButtonRef = useRef(null);
    const bellButtonRef = useRef(null);
    const phoneButtonRef = useRef(null);
    const modalRef = useRef(null);
    const dispositivosRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            (!modalRef.current || !modalRef.current.contains(event.target)) &&
            (!dispositivosRef.current || !dispositivosRef.current.contains(event.target)) &&
            (!loginButtonRef.current || !loginButtonRef.current.contains(event.target)) &&
            (!bellButtonRef.current || !bellButtonRef.current.contains(event.target)) &&
            (!phoneButtonRef.current || !phoneButtonRef.current.contains(event.target))
        ) {
            setIsModalOpen(false);
            setIsNotifOpen(false);
            setIsMobileModalOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const openModal = (ref, width, setter, positionSetter) => {
        // Cierra todos antes de abrir uno
        setIsModalOpen(false);
        setIsNotifOpen(false);
        setIsMobileModalOpen(false);

        const screenWidth = window.innerWidth;
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const estimatedLeft = rect.left + window.scrollX - width + 50;
            const maxLeft = screenWidth - width - 10;
            const finalLeft = Math.max(Math.min(estimatedLeft, maxLeft), 10);
            positionSetter({
                top: rect.bottom + window.scrollY + 5,
                left: finalLeft
            });
            setter(true); // abre el modal correspondiente
        }
    };

    const pageTitles = {
        "/": "Inicio",
        "/products": "Productos",
        "/category": "Categorías",
        "/inventory": "Inventario",
        "/pdv": "PDV",
        "/supply-per-unit": "Suministro por unidad",
        "/supply-per-box": "Suministro por caja",
        "/barcode-generator": "Generador de códigos de barras",
        "/alerts": "Alertas",
        "/account": "Cuenta",
        "/settings": "Reportes"
    };

    return (
        <div className="BarraNavegacion">
            <div className="menu migajas-container">
                <span className="titulo-pagina">{pageTitles[location.pathname] || "PDV"}</span>
            </div>

            <div className="menu logo-centro" onClick={() => navigate("/")}>
                <img src="/logo/Logo_sin_letras.png" className="logo-img" alt="Logo" />
            </div>

            <div className="menu">
                <button
                    className={`hamburger-button ${isMobileMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <ul className={`items ${isMobileMenuOpen ? "open" : ""}`}>
                    <li className="item" ref={bellButtonRef} onClick={() => openModal(bellButtonRef, 300, setIsNotifOpen, setNotifPosition)}>
                        <BellIcon className="icon-nav" />
                    </li>
                    <li className="item" ref={phoneButtonRef} onClick={() => openModal(phoneButtonRef, 280, setIsMobileModalOpen, setMobileModalPosition)}>
                        <DevicePhoneMobileIcon className="icon-nav" />
                    </li>
                    <li className="item" ref={loginButtonRef} onClick={() => openModal(loginButtonRef, 250, setIsModalOpen, setModalPosition)}>
                        <UserIcon className="icon-nav" />
                    </li>
                </ul>
            </div>

            {isModalOpen && (
                <ModalIniciarSesion
                    ref={modalRef}
                    position={modalPosition}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            {isNotifOpen && (
                <ModalNotificaciones
                    position={notifPosition}
                    onClose={() => setIsNotifOpen(false)}
                    notificaciones={notificaciones}
                />
            )}

            {isMobileModalOpen && (
                <ModalDispositivos
                    ref={dispositivosRef}
                    position={mobileModalPosition}
                    onClose={() => setIsMobileModalOpen(false)}
                />
            )}
        </div>
    );
};

export default BarraNavegacion;
