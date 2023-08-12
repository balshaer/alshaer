import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import i18n from './i18n.js';
import { inject } from '@vercel/analytics';
import 'animate.css';
import './i18n.js';
import { ThemeProvider } from "@material-tailwind/react";

inject();

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
    <App i18n={i18n} />
    </ThemeProvider>
  </StrictMode>
);
