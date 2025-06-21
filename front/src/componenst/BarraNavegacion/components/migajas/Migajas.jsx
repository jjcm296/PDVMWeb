import React from 'react';
import './Migajas.css';
import { useLocation, Link } from 'react-router-dom';

const aliasRuta = {
    'products': 'Productos',
    'profile': 'Perfil',
    'settings': 'Configuración',
    'pdv': 'PDV',
    'category': 'Categorías',
    'supply-per-box': 'suminitrar',
    'supply-per-unit': 'suminitrar',
};

const formatear = (segmento) => {
    return aliasRuta[segmento] ||
        segmento.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const Migajas = () => {
    const location = useLocation();
    const rutas = location.pathname.split('/').filter(Boolean);

    return (
        <nav className="migajas">
            <Link to="/">Inicio</Link>
            {rutas.map((segmento, index) => {
                const path = '/' + rutas.slice(0, index + 1).join('/');
                return (
                    <React.Fragment key={path}>
                        <span className="separador">/</span>
                        <Link to={path}>{formatear(decodeURIComponent(segmento))}</Link>
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default Migajas;
