import React from 'react';
import './BotonesPago.css';

const BotonesPago = ({onPagar, onVaciarCarrito}) => (
    <div className="botones-acciones">
        <button className="btn-pagar" onClick={onPagar}>Pagar</button>
        <button className="btn-cancelar" onClick={onVaciarCarrito}>Reiniciar compra</button>
    </div>
);

export default BotonesPago;
