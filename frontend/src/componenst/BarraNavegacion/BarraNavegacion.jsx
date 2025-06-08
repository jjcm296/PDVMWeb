import React, { useState, useRef, useEffect } from 'react';
import "./BarraNavegacion.css";
import ModalIniciarSesion from "../modals/modalIniciarSesion/ModalIniciarSesion";
import { useNavigate } from "react-router-dom";
import {
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
            const modalWidth = 250;
            const screenWidth = window.innerWidth;

            if (screenWidth <= 768) {
                // Centrado en móviles
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

    return (
        <div className="BarraNavegacion">
            <div className="menu migajas-container">
                <Migajas/>
            </div>

            <div className="menu logo-centro" onClick={() => navigate("/")}>
                <img
                    src="/logo/LogoB.png"
                    className="logo-img"
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
                    <li className="item"><BellIcon className="icon-nav"/></li>
                    <li className="item"><DevicePhoneMobileIcon className="icon-nav"/></li>
                    <li className="item" ref={loginButtonRef} onClick={handleButtonClick}>
                        <UserIcon className="icon-nav"/>
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
