import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Layout } from './Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Layout />
  </HashRouter>,
);
