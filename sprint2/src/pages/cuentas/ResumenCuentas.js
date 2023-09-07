
import React from 'react';
import Cuenta from './Cuenta';
import './ResumenCuentas.css';

function ResumenCuentas() {
  return (
    <section className="resumen-cuentas">
      <h2>Resumen de Cuentas</h2>
      <Cuenta nombre="Caja de Ahorro" saldo="$5,000" />
      <Cuenta nombre="Cuenta Corriente" saldo="$2,500" />
    </section>
  );
}

export default ResumenCuentas;
