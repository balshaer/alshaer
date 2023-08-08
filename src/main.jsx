import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.tsx';
import i18n from './i18n.ts';
import { inject } from '@vercel/analytics';
import 'animate.css';

inject();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App i18n={i18n} />
  </StrictMode>
);
