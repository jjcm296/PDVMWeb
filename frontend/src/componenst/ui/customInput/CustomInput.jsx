import React from "react";
import "./CustomInput.css";

const CustomInput = ({
                         type = "text",
                         placeholder = " ",
                         value,
                         onChange,
                         name,
                         required,
                         className = ""
                     }) => {
    return (
        <input
            type={type}
            className={`input-campo ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
        />
    );
};

export default CustomInput;
