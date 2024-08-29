import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextWrapper from './context/ContextWrapper';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>
);