import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

//alteração2
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
