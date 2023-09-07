import React from 'react';
import Sidebar from '../Sidebar';
import CalculadoraPrestamos from './operaciones/CalculadoraPrestamos';
import TasasDeCambio from './operaciones/TasasDeCambio';
import './Operaciones.css';

function Operaciones() {
  return (
    <div className="operaciones">
      <Sidebar />
      <div className="content">
        <h2>Operaciones</h2>
        <div className="CalculadoraPrestamos">
          <CalculadoraPrestamos />
        </div>
        <div className="TasasDeCambio">
          <TasasDeCambio />
        </div>
      </div>
    </div>
  );
}

export default Operaciones;
