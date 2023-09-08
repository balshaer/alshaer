import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import i18n from './i18n/i18n.js';
import { inject } from '@vercel/analytics';
import 'animate.css';
import { ThemeProvider } from "@material-tailwind/react";
import './index.css';

inject();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App i18n={i18n} />
    </ThemeProvider>
  </React.StrictMode>
);
