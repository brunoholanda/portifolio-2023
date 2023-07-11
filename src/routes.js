import React, { useState } from 'react';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';

import Contact from 'pages/Contact';
import Hobbies from 'pages/Hobbies';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Post from 'pages/Post';
import PageBody from 'pages/PageBody';
import MyStacks from 'pages/MyStacks';
import MyProjectsPage from 'pages/MyProjectsPage';
import About from 'pages/About';
import Posts from 'pages/Painel';
import Authentication from 'pages/Auth';

function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    // Verificar as credenciais do usuário
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageBody />}>
          <Route index element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/habilidades" element={<MyStacks />} />
          <Route path="/projetos" element={<MyProjectsPage />} />
          <Route path="/projetos/:id" element={<Post />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route
            path="/operador"
            element={
              isAuthenticated ? (
                <Posts />
              ) : (
                <Navigate to="/login" replace state={{ from: '/operador' }} />
              )
            }
          />
          <Route
            path="/login"
            element={<Authentication handleLogin={handleLogin} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
