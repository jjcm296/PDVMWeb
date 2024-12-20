import React from 'react';
import { Link} from "react-router-dom";
import "./BarraNavegacion.css"

const BarraNavegacion = () => {
    return (
        <div className="BarraNavegacion">
            <div className="menu">
                <nav>
                    <ul className="items">
                        <li id="item">🛒 PDV</li>
                        <li id="item">📝 Inventario</li>
                        <li id="item">🚚 Suministro</li>
                        <li id="item">🔔 Alertas</li>
                        <li id="item">🏷️ Productos</li>
                    </ul>
                </nav>
            </div>
            <div className="menu">
                <nav>
                    <ul className="items">
                        <li id="item">🔔</li>
                        <li id="item">📱</li>
                        <li id="item">❓</li>
                        <button className="login-button">
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default BarraNavegacion;