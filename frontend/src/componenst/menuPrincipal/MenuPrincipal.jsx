import React from 'react';
import './MenuPrincipal.css';
import { useNavigate } from 'react-router-dom';
import MenuButton from './components/MenuButton';

const MenuPrincipal = () => {
    const navigate = useNavigate();

    return (
        <header className="menu-principal">
            <div className="contenedor">
                <MenuButton image={'/logo/Categoria.png'} onClick={() => navigate('/category')} />
                <MenuButton image={'/logo/Barras.png'} onClick={() => navigate('/barcode-generator')} />
                <MenuButton image={'/logo/Alerta.png'} onClick={() => navigate('/alerts')} />
            </div>
            <div className="contenedor">
                <MenuButton image={'/logo/inventario.png'} onClick={() => navigate('/inventory')} />
                <MenuButton image={'/logo/LogoB.png'} onClick={() => navigate('/pdv')} fullWidth className="sapphire"/>
            </div>
            <div className="contenedor">
                <MenuButton image={'/logo/Productos.png'} onClick={() => navigate('/products')} fullWidth className="sapphire"/>
                <MenuButton image={'/logo/Perfil.png'} onClick={() => navigate('/account')} />
            </div>
            <div className="contenedor">
                <MenuButton image={'/logo/Suministro.png'} onClick={() => navigate('/supply-per-unit')}/>
                <MenuButton image={'logo/Reportes.png'} onClick={() => navigate('/settings')} />
                <MenuButton image={'/logo/SuministroCaja.png'} onClick={() => navigate('/supply-per-box')}/>
            </div>
        </header>
    );
};

export default MenuPrincipal;
