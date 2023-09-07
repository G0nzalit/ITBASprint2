import React from 'react';
import './Header.css';
import logoImage from './logotipo.png';

function Header() {
  return (
    <div className="headers">
      <img src={logoImage} alt="Logo del Banco" />
      <h1>Banco Argentino Sin Inflación</h1>
    </div>
  );
}

export default Header;
