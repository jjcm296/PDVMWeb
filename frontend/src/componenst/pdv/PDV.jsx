import React from 'react';
import './PDV.css';
import PanelIzquierdo from "./components/panelIzquierdo/PanelIzquierdo";
import PanelDerecho from "./components/panelDerecho/PanelDerecho";

const PDV = () => {
    return (
        <div className="pantalla-pdv">
            <PanelIzquierdo/>
            <PanelDerecho/>
        </div>
    );
};

export default PDV;
