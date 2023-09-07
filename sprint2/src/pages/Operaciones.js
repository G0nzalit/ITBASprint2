import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../Sidebar'; // Importa el Sidebar
function Operaciones() {

  
  // Define el estado para el monto, resultado y tasas de cambio
  const [monto, setMonto] = useState(0);
  const [resultado, setResultado] = useState('');
  const [tasasDeCambio, setTasasDeCambio] = useState({});
  
  // Utiliza useRef para obtener referencias a los elementos del formulario
  const montoInput = useRef(null);
  const monedaSelect = useRef(null);

  // Función para convertir el monto
  function convertir() {
    const montoValue = parseFloat(montoInput.current.value);
    const monedaValue = monedaSelect.current.value;
    let resultadoValue;

    if (tasasDeCambio[monedaValue]) {
      resultadoValue = (montoValue * tasasDeCambio[monedaValue]).toFixed(2) + ' ' + monedaValue;
    } else {
      resultadoValue = '';
    }

    setResultado(resultadoValue);
  }

  // Realizar una solicitud a la API para obtener las tasas de cambio al montar el componente
  useEffect(() => {
    // Puedes registrarte en exchangeratesapi.io para obtener una clave de API y reemplazar 'TU_API_KEY' a continuación
    
    const url = `https://api.exchangerate-api.com/v4/latest/USD`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Guardar las tasas de cambio en el estado
        setTasasDeCambio(data.rates);
      })
      .catch(error => console.error('Error al obtener las tasas de cambio:', error));
  }, []);

  return (
    <div className="operaciones">
      <Sidebar /> {/* Agrega el Sidebar al componente */}
      <div className="content">
        {/* Contenido principal del componente */}
        <div>
      <h2>Operaciones</h2>
      <form>
        <label htmlFor="monto">Monto:</label>
        <input type="number" id="monto" ref={montoInput} />

        <label htmlFor="moneda">Moneda:</label>
        <select id="moneda" ref={monedaSelect}>
          {/* Opciones para todas las monedas disponibles en las tasas de cambio */}
          {Object.keys(tasasDeCambio).map(moneda => (
            <option key={moneda} value={moneda}>
              {moneda}
            </option>
          ))}
        </select>

        <button type="button" id="convertirBtn" onClick={convertir}>
          Convertir
        </button>
      </form>

      <p id="resultado">Resultado: {resultado}</p>
     </div>
      </div>
    </div>
  );
}

export default Operaciones;
