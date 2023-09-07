import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar'; // Importa el Sidebar

function Transferencias() {
  const [cuentaOrigen, setCuentaOrigen] = useState('');
  const [cuentaDestino, setCuentaDestino] = useState('');
  const [monto, setMonto] = useState('');
  const [concepto, setConcepto] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const transferenciaExitosa = true; 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    if (transferenciaExitosa) {
      setSuccessMessage('¡La transferencia fue exitosa!');
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); 
    } else {
      setSuccessMessage('¡La transferencia falló!'); 
    }
  };
  
  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setSuccessMessage('');
    }, 5000);

    
    return () => clearTimeout(timeout);
  }, [successMessage]);

  return (
    <div className="operaciones">
      <Sidebar /> {/* Agrega el Sidebar al componente */}
      <div className="content">
        {/* Contenido principal del componente */}
        <div>
      <header>
        <h1>Transferencias</h1>
      </header>

      <main>
        <section>
          <h2>Realizar Transferencia</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="cuenta-origen">Cuenta Origen:</label>
            <input
              type="text"
              id="cuenta-origen"
              required
              placeholder="Ingrese cuenta"
              value={cuentaOrigen}
              onChange={(e) => setCuentaOrigen(e.target.value)}
            />

            <label htmlFor="cuenta-destino">Cuenta Destino:</label>
            <input
              type="text"
              id="cuenta-destino"
              required
              placeholder="Ingrese cuenta"
              value={cuentaDestino}
              onChange={(e) => setCuentaDestino(e.target.value)}
            />

            <label htmlFor="monto">Monto:</label>
            <input
              type="number"
              id="monto"
              required
              placeholder="Ingrese monto"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />

            <label htmlFor="concepto">Concepto:</label>
            <input
              type="text"
              id="concepto"
              placeholder="Ingrese concepto"
              value={concepto}
              onChange={(e) => setConcepto(e.target.value)}
            />

            <button type="submit">Transferir</button>
          </form>

          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </section>
      </main>
    </div>
      </div>
    </div>
  );
}

export default Transferencias;
