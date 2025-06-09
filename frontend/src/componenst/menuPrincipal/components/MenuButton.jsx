import React from 'react';
import './MenuButton.css';

const MenuButton = ({ label, onClick, fullWidth = false, image }) => {
    return (
        <div
            className={`menu-button ${fullWidth ? 'full-width' : ''}`}
            onClick={onClick}
        >
            {image && <img src={image} alt={label} className="menu-button-img" />}
            <span className="menu-button-label">{label}</span>
        </div>
    );
};

export default MenuButton;
