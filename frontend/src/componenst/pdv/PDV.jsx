import React from 'react';
import './PDV.css';
import TarjetaProductoBarra from "./components/tarjetasProducto/TarjetaProductoBarra";
import TarjetaProducto from "./components/tarjetasProducto/TarjetaProducto";
import Buscador from "../ui/buscador/Buscador";
import SwitchVista from "./components/switchVista/VistaToggle";
import PanelIzquierdo from "./components/panelIzquierdo/PanelIzquierdo";

const PDV = () => {
    return (
        <div className="pantalla-pdv">
            <PanelIzquierdo/>
        </div>
    );
};

export default PDV;
