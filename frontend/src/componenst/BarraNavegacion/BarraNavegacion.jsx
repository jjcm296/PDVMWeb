import React, { useState, useRef, useEffect } from 'react';
import "./BarraNavegacion.css";
import ModalIniciarSesion from "../modals/modalIniciarSesion/ModalIniciarSesion";
import {Navigate, useNavigate} from "react-router-dom";

const BarraNavegacion = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
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
    // Cerrar el modal si el clic es fuera del modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && !loginButtonRef.current.contains(event.target)) {
                setIsModalOpen(false); // Cerrar el modal
            }
        };
        // Agregar el evento de clic al documento
        document.addEventListener("mousedown", handleClickOutside);
        // Limpiar el evento al desmontar el modal
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="BarraNavegacion">
            <div className="menu">
                <nav className="home">
                    <ul className="items">
                        <li id="item" onClick={() => navigate("/")}>LOGO</li>
                    </ul>
                </nav>
            </div>
            <div className="menu">
                <nav>
                    <ul className="items">
                        <li id="item">🔔</li>
                        <li id="item">📱</li>
                        <li id="item">❓</li>
                        <button
                            ref={loginButtonRef}
                            onClick={handleButtonClick}
                            className="login-button">
                        </button>
                    </ul>
                </nav>
            </div>
            {isModalOpen && <ModalIniciarSesion ref={modalRef} position={modalPosition} onClose={closeModal} />}
        </div>
    );
};

export default BarraNavegacion;