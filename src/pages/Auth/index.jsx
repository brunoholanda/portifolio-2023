import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';
import cadeado from '../../public/assets/img/cadeado.png';
import { BASE_URL } from 'config';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
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

      const { token } = await response.json();
      localStorage.setItem('authToken', token);
      navigate('/operador');
    } catch (error) {
      alert(error.message);
    }

    setUsername('');
    setPassword('');
  };

  /*const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
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

      navigate('/login');
    } catch (error) {
      alert(error.message);
    }

    setUsername('');
    setPassword('');
  };*/

  return (
    <div className={styles.autenticar}>
      <div className={styles.icone}>
      <h1>Acesso ao Painel do Operador</h1>
      <img src={cadeado} alt="imagem de cadeado" />
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder='Usuário'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Authentication;


/*     <h2>Registro</h2>
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
</form>*/