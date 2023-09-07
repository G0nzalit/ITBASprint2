
import React from 'react';
import Sidebar from '../Sidebar'; // Importa el Sidebar

function Cuentas() {
  return (
    <div className="operaciones">
      <Sidebar /> {/* Agrega el Sidebar al componente */}
      <div className="content">
        {/* Contenido principal del componente */}
        <div>
      <header>
        <h1>Mis Cuentas</h1>
      </header>

      <main>
        <h2>Resumen de Cuentas</h2>
        <section>
          <h3>Caja de Ahorro</h3>
          <p>$5,000</p>
        </section>

        <section>
          <h3>Cuenta Corriente</h3>
          <p>$2,500</p>
        </section>

        <h2>Movimientos</h2> 
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/08/2023</td>
              <td>Depósito</td>
              <td className="credit">$1000</td>
            </tr>
            <tr>
              <td>05/08/2023</td>
              <td>Retiro</td>
              <td className="debit">-$500</td>
            </tr>
          </tbody>
        </table>
      </main>

    

    </div>
      </div>
    </div>
  );
}

export default Cuentas;
