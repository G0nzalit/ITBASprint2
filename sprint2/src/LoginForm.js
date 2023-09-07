
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    console.log('Datos de inicio de sesión:', formData);
    setError('');

    
    navigate('/home');
  };

  return (
    <div>
    <h2>Iniciar Sesión</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button type="submit">Iniciar Sesión</button>
      </div>
    </form>
    <div>
      <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p>
    </div>
  </div>
  );
}

export default LoginForm;
