import React from 'react';
import './MenuPrincipal.css';
import { useNavigate } from 'react-router-dom';
import MenuButton from './components/MenuButton';

const MenuPrincipal = () => {
    const navigate = useNavigate();

    return (
        <header className="menu-principal">
            <div className="contenedor">
                <MenuButton label="Categorías" image={'/logo/Categoria.png'} onClick={() => navigate('/category')} tooltipBottom />
                <MenuButton label="Códigos de Barras" image={'/logo/Barras.png'} onClick={() => navigate('/barcode-generator')} tooltipBottom />
                <MenuButton label="Alertas" image={'/logo/Alerta.png'} onClick={() => navigate('/alerts')} tooltipBottom />
            </div>
            <div className="contenedor">
                <MenuButton label="Inventario" image={'/logo/inventario.png'} onClick={() => navigate('/inventory')} />
                <MenuButton label="Punto de Venta" image={'/logo/LogoB.png'} onClick={() => navigate('/pdv')} fullWidth className="sapphire" />
            </div>
            <div className="contenedor">
                <MenuButton label="Productos" image={'/logo/Productos.png'} onClick={() => navigate('/products')} fullWidth className="sapphire" />
                <MenuButton label="Cuenta" image={'/logo/Perfil.png'} onClick={() => navigate('/account')} />
            </div>
            <div className="contenedor">
                <MenuButton label="Suministro por Unidad" image={'/logo/Suministro.png'} onClick={() => navigate('/supply-per-unit')} />
                <MenuButton label="Reportes" image={'logo/Reportes.png'} onClick={() => navigate('/settings')} />
                <MenuButton label="Suministro por Caja" image={'/logo/SuministroCaja.png'} onClick={() => navigate('/supply-per-box')} />
            </div>
        </header>
    );
};

export default MenuPrincipal;
