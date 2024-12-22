import React from 'react';
import "./MenuPrincipal.css"
import {useNavigate} from "react-router-dom";

const MenuPrincipal = () => {
    const navigate = useNavigate();

    return (
        <header className="menu-principal">
            <div className="contenedor">
                <div onClick={()=>navigate("/pdv")} className="apartado-pdv">PDV</div>
            </div>
            <div className="contenedor">
                <div onClick={()=>navigate("/inventory")} className="apartado">Inventario</div>
                <div onClick={()=>navigate("/products")} className="apartado">Productos</div>
                <div className="apartado"></div>
            </div>
            <div className="contenedor">
                <div onClick={()=>navigate("/supply-per-unit")} className="apartado">Suministrado por unidad</div>
                <div onClick={()=>navigate("/category")} className="apartado">Categoría</div>
                <div onClick={()=>navigate("/supply-per-box")} className="apartado">Suministrado por caja</div>
            </div>
            <div className="contenedor">
                <div className="apartado"></div>
                <div onClick={()=>navigate("/alerts")} className="apartado">Alertas</div>
                <div onClick={()=>navigate("/account")} className="apartado">Cuenta</div>
            </div>

        </header>
    );
};

export default MenuPrincipal;