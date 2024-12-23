
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { StrictMode } from 'react';
import App from './App';
import './index.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

