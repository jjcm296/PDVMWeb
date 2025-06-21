import React, { useState, useRef, useEffect } from 'react';
import './ModalAgregarProducto.css';
import CustomInput from "../../../ui/customInput/CustomInput";
import { useCategorias } from "../../../../context/categoriaContext.jsx";

const ModalAgregarProducto = ({ onClose, onSubmit }) => {
    const [form, setForm] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        codigoBarra: '',
        marca: '',
        categoriaId: '',
        imagen: null
    });

    const [previewUrl, setPreviewUrl] = useState(null);
    const inputFileRef = useRef(null);

    const { categoriesOriginal, loadCategories } = useCategorias();

    useEffect(() => {
        loadCategories();
    }, []);

    const handleChange = e => {
        const { name, value, files } = e.target;

        if (name === "imagen") {
            const file = files[0];
            setForm(prev => ({ ...prev, imagen: file }));
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async () => {
        if (!form.nombre || !form.precio || !form.categoriaId) {
            alert("Nombre, precio y categoría son obligatorios.");
            return;
        }

        const ok = await onSubmit(form);
        if (ok) onClose();
    };


    return (
        <div className="modal-agregar-producto">
            <div className="modal-contenido">
                <h2 className="modal-titulo">Agregar <span>Producto</span></h2>

                <div className="campo-entrada">
                    <CustomInput name="nombre" value={form.nombre} onChange={handleChange} required/>
                    <label htmlFor="nombre">Nombre</label>
                </div>

                <div className="campo-entrada">
                    <CustomInput type="number" name="precio" value={form.precio} onChange={handleChange} required/>
                    <label htmlFor="precio">Precio</label>
                </div>

                <div className="campo-entrada">
                    <select name="categoriaId" value={form.categoriaId} onChange={handleChange} required>
                        <option value="">Selecciona categoría</option>
                        {categoriesOriginal?.map(cat => (
                            <option key={cat.idCategoria} value={cat.idCategoria}>{cat.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="campo-entrada">
                    <CustomInput name="descripcion" value={form.descripcion} onChange={handleChange} required/>
                    <label htmlFor="descripcion">Descripción</label>
                </div>

                <div className="campo-entrada">
                    <CustomInput name="marca" value={form.marca} onChange={handleChange} required/>
                    <label htmlFor="marca">Marca</label>
                </div>

                <div className="campo-entrada">
                    <CustomInput name="codigoBarra" value={form.codigoBarra} onChange={handleChange} required/>
                    <label htmlFor="codigoBarra">Código de barras</label>
                </div>

                {/* Imagen */}
                <div
                    className="drop-area"
                    onClick={() => inputFileRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files[0];
                        setForm(prev => ({...prev, imagen: file}));
                        setPreviewUrl(URL.createObjectURL(file));
                    }}
                >
                    {previewUrl ? (
                        <div className="preview-wrapper">
                            <img src={previewUrl} alt="Vista previa" className="preview-imagen"/>
                            <button
                                type="button"
                                className="boton-eliminar-imagen"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setPreviewUrl(null);
                                    setForm(prev => ({...prev, imagen: null}));
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    ) : (
                        <p>Arrastra una imagen aquí o haz clic para seleccionar</p>
                    )}
                    <input
                        ref={inputFileRef}
                        type="file"
                        name="imagen"
                        accept="image/*"
                        onChange={handleChange}
                        className="input-file-oculto"
                    />
                </div>

                <div className="modal-botones">
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalAgregarProducto;
