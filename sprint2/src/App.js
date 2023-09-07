import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cuentas from './pages/Cuentas';
import Transferencias from './pages/Transferencias';
import Operaciones from './pages/Operaciones';
import Header from './Header';
import styles from './LoginForm.module.css'; 
import './Responsive.css';
import LoginForm from './LoginForm';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                loggedIn ? (
                  <Navigate to="/home" />
                ) : (
                  
                  <div className={styles.container}>
                    <LoginForm setLoggedIn={setLoggedIn} />
                  </div>
                )
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/transferencias" element={<Transferencias />} />
            <Route path="/operaciones" element={<Operaciones />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
