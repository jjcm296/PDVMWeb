import React from 'react';
import './MenuButton.css';

const MenuButton = ({
                        label,
                        onClick,
                        fullWidth = false,
                        image,
                        tooltipBottom = false,
                        disabled = false,
                        onDisabledClick
                    }) => {
    const handleClick = () => {
        if (disabled && onDisabledClick) {
            onDisabledClick();
        } else if (!disabled && onClick) {
            onClick();
        }
    };

    return (
        <div
            className={`menu-button ${fullWidth ? 'full-width' : ''} ${disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            title={disabled ? 'Próximamente' : label}
        >
            {image && <img src={image} alt={label} className="menu-button-img" />}
            <span className={`tooltip ${tooltipBottom ? 'tooltip-bottom' : ''}`}>{label}</span>
        </div>
    );
};

export default MenuButton;
