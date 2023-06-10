import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.css';
import App from './App';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/datsme'>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
