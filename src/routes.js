import Loading from 'components/Loading';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes, HashRouter, useLocation } from 'react-router-dom';
import { hotjar } from 'react-hotjar';

const Contact = lazy(() => import('pages/Contact'));
const Hobbies = lazy(() => import('pages/Hobbies'));
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const Post = lazy(() => import('pages/Post'));
const PageBody = lazy(() => import('pages/PageBody'));
const MyStacks = lazy(() => import('pages/MyStacks'));
const MyProjectsPage = lazy(() => import('pages/MyProjectsPage'));
const About = lazy(() => import('pages/About'));
const Posts = lazy(() => import('pages/Painel'));
const Authentication = lazy(() => import('pages/Auth'));


function AppRoutes() {



  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    hotjar.initialize(4997618, 6);
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

    }, [pathname]);

    return null;
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>

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
              element={<Authentication setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default AppRoutes;
