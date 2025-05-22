import React, { useState, useRef, useEffect } from 'react';
import "./BarraNavegacion.css";
import ModalIniciarSesion from "../modals/modalIniciarSesion/ModalIniciarSesion";
import { useNavigate } from "react-router-dom";
import {
    Bars3Icon,
    UserIcon,
    BellIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import Migajas from './components/migajas/Migajas';

const BarraNavegacion = () => {
    const navigate = useNavigate();
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
            if (loginButtonRef.current) {
                const rect = loginButtonRef.current.getBoundingClientRect();
                setModalPosition({
                    top: rect.bottom + window.scrollY + 5,
                    left: rect.left + window.scrollX - 150,
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

    return (
        <div className="BarraNavegacion">
            {/* Migajas a la izquierda */}
            <div className="menu migajas-container">
                <Migajas />
            </div>

            {/* Logo centrado */}
            <div className="menu logo-centro" onClick={() => navigate("/")}>
                PDVW
            </div>

            {/* Botones a la derecha */}
            <div className="menu">
                <button className="hamburger-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <Bars3Icon className="icon-nav" />
                </button>

                <ul className={`items ${isMobileMenuOpen ? "open" : ""}`}>
                    <li className="item"><BellIcon className="icon-nav" /></li>
                    <li className="item"><DevicePhoneMobileIcon className="icon-nav" /></li>
                </ul>

                <button
                    ref={loginButtonRef}
                    onClick={handleButtonClick}
                    className="login-button"
                    aria-label="Abrir login"
                >
                    <UserIcon className="icon-nav user-icon" />
                </button>
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
