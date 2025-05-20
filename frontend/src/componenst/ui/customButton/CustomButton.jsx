import React from "react";
import "./CustomButton.css";

const CustomButton = ({ children, onClick, className = "", type = "button" }) => {
    return (
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default CustomButton;
