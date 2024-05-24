import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from 'routes';
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';

ReactGA.initialize('G-FB4JQW2MMS');

ReactGA.pageview(window.location.pathname + window.location.search);


const hotjarId = '4997618';
const hotjarVersion = 6;

hotjar.initialize(hotjarId, hotjarVersion);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
