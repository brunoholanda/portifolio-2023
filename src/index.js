import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from 'routes';
import { hotjar } from 'react-hotjar';

const hotjarId = '4997618';
const hotjarVersion = 6;

hotjar.initialize(hotjarId, hotjarVersion);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
