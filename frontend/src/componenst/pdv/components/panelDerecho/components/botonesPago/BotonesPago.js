import React from 'react';
import './BotonesPago.css';

const BotonesPago = ({onPagar}) => (
    <div className="botones-acciones">
        <button className="btn-pagar" onClick={onPagar}>Pagar</button>
        <button className="btn-cancelar">Cancelar</button>
    </div>
);

export default BotonesPago;
