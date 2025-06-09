import React from 'react';
import './MenuPrincipal.css';
import { useNavigate } from 'react-router-dom';
import MenuButton from './components/MenuButton';

const MenuPrincipal = () => {
    const navigate = useNavigate();

    return (
        <header className="menu-principal">
            <div className="contenedor">
                <MenuButton label="Categoría" onClick={() => navigate('/category')} />
                <MenuButton label="Barras"  onClick={() => navigate('/barcode-generator')} />
                <MenuButton label="Alertas" onClick={() => navigate('/alerts')} />
            </div>
            <div className="contenedor">
                <MenuButton label="Inventario" onClick={() => navigate('/inventory')} />
                <MenuButton image={'/logo/LogoB.png'} onClick={() => navigate('/pdv')} fullWidth className="sapphire"/>
            </div>
            <div className="contenedor">
                <MenuButton image={'/logo/Suministro.png'} onClick={() => navigate('/supply-per-unit')}/>
                <MenuButton label="Ajustes" onClick={() => navigate('/settings')} />
                <MenuButton label="Suministro caja" onClick={() => navigate('/supply-per-box')}/>
            </div>
            <div className="contenedor">
                <MenuButton image={'/logo/Productos.png'} onClick={() => navigate('/products')} fullWidth className="sapphire"/>
                <MenuButton label="Cuenta" onClick={() => navigate('/account')} />
            </div>
        </header>
    );
};

export default MenuPrincipal;
