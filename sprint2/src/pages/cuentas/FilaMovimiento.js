
import React from 'react';
import './FilaMovimiento.css';

function FilaMovimiento({ fecha, descripcion, monto }) {
  const className = monto.startsWith('-') ? 'debit' : 'credit';

  return (
    <tr>
      <td>{fecha}</td>
      <td>{descripcion}</td>
      <td className={className}>{monto}</td>
    </tr>
  );
}

export default FilaMovimiento;
