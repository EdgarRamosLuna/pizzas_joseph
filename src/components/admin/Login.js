import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://phpstack-491629-3140445.cloudwaysapps.com/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log(response.json());
        //const { token } = await response.json();
        //localStorage.setItem('token', token);
        // Redirige al usuario a la página principal de la aplicación
      //  window.location.replace('/');
      } else {
        throw new Error('La autenticación ha fallado');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label>
        Correo electrónico:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
