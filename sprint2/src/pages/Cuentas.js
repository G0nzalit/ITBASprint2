import React from 'react';
import Sidebar from '../Sidebar';
import ResumenCuentas from './cuentas/ResumenCuentas';
import Movimientos from './cuentas/Movimientos';
import './Cuentas.css';

function Cuentas() {
  return (
    <div className="cuentas-container">
      <Sidebar />
      <div className="content">
        <h1>Mis Cuentas</h1>
        <div className="ResumenCuentas">
          <ResumenCuentas />
        </div>
        <div className="Movimientos">
          <Movimientos />
        </div>
      </div>
    </div>
  );
}

export default Cuentas;
