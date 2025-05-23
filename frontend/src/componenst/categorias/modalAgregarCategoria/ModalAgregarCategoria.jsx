import React, { useState } from 'react';
import './ModalAgregarCategoria.css';
import CustomInput from "../../ui/customInput/CustomInput";

const ModalAgregarCategoria = ({ onClose, onSubmit }) => {
    const [nombre, setNombre] = useState('');

    const handleSubmit = () => {
        if (!nombre.trim()) {
            alert("El nombre es obligatorio.");
            return;
        }

        onSubmit({ nombre });
        onClose();
    };

    return (
        <div className="modal-agregar-categoria">
            <div className="modal-contenido">
                <h2 className="modal-titulo">Agregar <span>Categoría</span></h2>

                <div className="campo-entrada">
                    <CustomInput name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                    <label htmlFor="nombre">Nombre</label>
                </div>

                <div className="modal-botones">
                    <button onClick={handleSubmit}>Guardar</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalAgregarCategoria;
