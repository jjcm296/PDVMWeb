import React from 'react';

const CrearUsuario = () => {
    return (
        <header className="crear-cuenta">
            <div className="div-text">
                <h1 className="titulo">Datos usuario</h1>
                <p className="texto">Ingresa tus datos para que seas parte de PDVW</p>
            </div>
            <form action="" className="datos-usuario">
                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="nombre" required/>
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="apellido-paterno" required/>
                    <label htmlFor="nombre">Apellido paterno</label>
                </div>
                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="apellido-materno" required/>
                    <label htmlFor="nombre">Apellido materno</label>
                </div>

                <div className="campo-entrada">
                    <input className="input-campo" type="text" id="telefono" required/>
                    <label htmlFor="telefono">Télefono</label>
                </div>

                <button className="boton-registrarse">Siguiente ></button>
            </form>
        </header>
    );
};

export default CrearUsuario;