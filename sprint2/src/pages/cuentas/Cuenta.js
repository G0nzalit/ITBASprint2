
import React from 'react';
import './Cuenta.css';
function Cuenta({ nombre, saldo }) {
  return (
    <div className="cuenta">
      <h3>{nombre}</h3>
      <p>{saldo}</p>
    </div>
  );
}

export default Cuenta;
