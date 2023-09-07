import React, { useState, useRef } from 'react';
import Sidebar from '../Sidebar';
import CalculadoraPrestamos from './operaciones/CalculadoraPrestamos';
import TasasDeCambio from './operaciones/TasasDeCambio';
import './Operaciones.css';

function Operaciones() {
  const [resultado, setResultado] = useState({});
  const montoInput = useRef(null);
  const monedaSelect = useRef(null);

  function convertir() {
  }

  return (
    <div className="operaciones">
      <Sidebar />
      <div className="content">
  
          <h2>Operaciones</h2>
          <CalculadoraPrestamos />
          <TasasDeCambio />

      </div>
    </div>
  );
}

export default Operaciones;