import React from 'react';
import './TotalAPagar.css';

const TotalAPagar = ({ total }) => (
    <div className="total-box">
        <span className="total-label">Total a pagar</span>
        <span className="total-monto">${total}</span>
    </div>
);

export default TotalAPagar;
