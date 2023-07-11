import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Lógica de autenticação
    } catch (error) {
      alert(error.message);
    }

    // Limpar o formulário
    setUsername('');
    setPassword('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      // Registro bem-sucedido, redirecionar para a rota de login
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }

    // Limpar o formulário
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>   
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>

      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="register-username">Usuário:</label>
          <input
            type="text"
            id="register-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>   
          <label htmlFor="register-password">Senha:</label>
          <input
            type="password"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Authentication;
