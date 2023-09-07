import React from 'react';
import Sidebar from '../Sidebar';
import Promocion from '../pages/comp/Promocion';
import Novedades from '../pages/comp/Novedades';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="content">
        <main>
          <section id="inicio">
            <h2>Bienvenido al Home Banking</h2>
            <p>Resumen de cuentas y operaciones recientes</p>
          </section>
  
          <section id="promociones">
            <h2>Promociones para ti</h2>
            <Promocion titulo="Depósito a plazo fijo" descripcion="Tasa preferencial 4% por 3 meses." />
            <Promocion titulo="Seguro para tu auto" descripcion="20% de descuento en tu seguro anual." />
            <Promocion titulo="Préstamos personales" descripcion="Sin interés por 3 meses." />
          </section>
  
          <Novedades />
        </main>
  
        <footer>
          <p>Contacto: info@bancosf.com</p>
          <nav>
            <ul className="pie">
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Home;
