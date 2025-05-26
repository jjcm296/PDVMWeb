import React, { useState } from 'react';
import './ModalRegistrarSuministro.css';
import CustomInput from "../../ui/customInput/CustomInput";

const ModalRegistrarSuministro = ({ producto, onClose, onSubmit }) => {
    const [cantidad, setCantidad] = useState('');

    const handleSubmit = async () => {
        if (!cantidad || cantidad <= 0) {
            alert('Ingresa una cantidad válida.');
            return;
        }

        const ok = await onSubmit({
            productoId: producto.idProducto,
            cantidad: parseInt(cantidad)
        });

        if (ok) onClose();
    };

    return (
        <div className="modal-agregar-producto">
            <div className="modal-contenido">
                <h2 className="modal-titulo">Registrar <span>Suministro</span></h2>

                <p><strong>Producto:</strong> {producto.nombre}</p>

                <div className="campo-entrada">
                    <CustomInput
                        name="cantidad"
                        type="number"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                    <label htmlFor="cantidad">Cantidad a suministrar</label>
                </div>

                <div className="modal-botones">
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalRegistrarSuministro;
