
import React from 'react';

function Promocion({ titulo, descripcion }) {
  return (
    <div className="promocion">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Promocion;
