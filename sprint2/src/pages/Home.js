import React from 'react';
import Sidebar from '../Sidebar'; // Importa el Sidebar

function Home() {
  return (
    <div className="home">
      <Sidebar /> {/* Agrega el Sidebar al componente */}
      <div className="content">
        {/* Contenido principal del componente */}
      
        
        <main>
        <section id="inicio">
          <h2>Bienvenido al Home Banking</h2>
          <p>Resumen de cuentas y operaciones recientes</p>
        </section>
  
        <section id="promociones">
          <h2>Promociones para ti</h2>
          <div className="promocion">
            <h3>Depósito a plazo fijo</h3>
            <p>Tasa preferencial 4% por 3 meses.</p>
          </div>
  
          <div className="promocion">
            <h3>Seguro para tu auto</h3>
            <p>20% de descuento en tu seguro anual.</p>
          </div>
  
          <div className="promocion">
            <h3>Préstamos personales</h3>
            <p>Sin interés por 3 meses.</p>
          </div>
        </section>
  
        <section id="novedades">
          <h2>Novedades</h2>
          <p>El BCRA dispuso nuevas medidas referentes a canje y/o arbitraje de moneda extranjera y consumos y retiros de efectivo en el exterior con tarjetas de débito. Vigencia 06/05/2016.</p>
          <p>Nuestro banco incorpora una nueva funcionalidad en su módulo de Comercio Exterior de Online Banking Cash Management.</p>
        </section>
  
        <footer>
          <p>Contacto: info@bancosf.com</p>
          <nav>
            <ul className="pie">
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
            </ul>
          </nav>
        </footer>
      </main>
















      </div>
    </div>
  );
}

export default Home;
