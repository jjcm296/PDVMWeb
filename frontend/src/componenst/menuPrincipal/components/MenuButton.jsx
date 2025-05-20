import React from 'react';
import './MenuButton.css';

const MenuButton = ({ label, onClick, fullWidth = false }) => {
    return (
        <div
            className={`menu-button ${fullWidth ? 'full-width' : ''}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

export default MenuButton;
