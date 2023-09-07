
import React from 'react';
import FilaMovimiento from './FilaMovimiento';
import './Movimientos.css';

function TablaMovimientos() {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Descripción</th>
          <th>Monto</th>
        </tr>
      </thead>
      <tbody>
        <FilaMovimiento fecha="01/08/2023" descripcion="Depósito" monto="$1000" />
        <FilaMovimiento fecha="05/08/2023" descripcion="Retiro" monto="-$500" />
      </tbody>
    </table>
  );
}

function Movimientos() {
  return (
    <section className="movimientos">
      <h2>Movimientos</h2>
      <TablaMovimientos />
    </section>
  );
}

export default Movimientos;
