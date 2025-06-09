import React, { useState, useRef, useEffect } from 'react';
import "./BarraNavegacion.css";
import ModalIniciarSesion from "../modals/modalIniciarSesion/ModalIniciarSesion";
import { useNavigate, useLocation } from "react-router-dom";
import {
    UserIcon,
    BellIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";

const BarraNavegacion = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const loginButtonRef = useRef(null);
    const modalRef = useRef(null);

    const closeModal = () => setIsModalOpen(false);

    const handleButtonClick = () => {
        if (isModalOpen) {
            setIsModalOpen(false);
        } else {
            const modalWidth = 250;
            const screenWidth = window.innerWidth;

            if (screenWidth <= 768) {
                setModalPosition({
                    top: window.innerHeight / 2 - 120,
                    left: screenWidth / 2 - modalWidth / 2,
                });
            } else if (loginButtonRef.current) {
                const rect = loginButtonRef.current.getBoundingClientRect();
                const estimatedLeft = rect.left + window.scrollX - 220;
                const maxLeft = screenWidth - modalWidth - 10;
                const finalLeft = Math.max(Math.min(estimatedLeft, maxLeft), 10);

                setModalPosition({
                    top: rect.bottom + window.scrollY + 5,
                    left: finalLeft,
                });
            }

            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target) &&
                !loginButtonRef.current.contains(event.target)
            ) {
                setIsModalOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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

    const getPageTitle = (pathname) => pageTitles[pathname] || "PDV";

    return (
        <div className="BarraNavegacion">
            <div className="menu migajas-container">
                <span className="titulo-pagina">{getPageTitle(location.pathname)}</span>
            </div>

            <div className="menu logo-centro" onClick={() => navigate("/")}>
                <img
                    src="/logo/Logo_sin_letras.png"
                    className="logo-img"
                    alt="Logo"
                />
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
                    <li className="item"><BellIcon className="icon-nav" /></li>
                    <li className="item"><DevicePhoneMobileIcon className="icon-nav" /></li>
                    <li className="item" ref={loginButtonRef} onClick={handleButtonClick}>
                        <UserIcon className="icon-nav" />
                    </li>
                </ul>
            </div>

            {isModalOpen && (
                <ModalIniciarSesion
                    ref={modalRef}
                    position={modalPosition}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default BarraNavegacion;
