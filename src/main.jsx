import { ThemeProvider } from "@material-tailwind/react";
import { inject } from "@vercel/analytics";
import "animate.css";
import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import "./assets/css/global.css";
import i18n from "./i18n/i18n.js";

inject();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App i18n={i18n} />
    </ThemeProvider>
  </React.StrictMode>,
);
