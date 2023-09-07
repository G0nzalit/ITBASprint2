import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav class="menu">
        <ul>
          <li><Link to="/Home">Inicio</Link></li>
          <li><Link to="/cuentas">Cuentas</Link></li>
          <li><Link to="/transferencias">Transferencias</Link></li>
          <li><Link to="/operaciones">Operaciones</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
