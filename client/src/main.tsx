import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import "../app/css/globals.css";
import i18n from "./i18n.ts";
import AOS from "aos";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";

AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <SpeedInsights />
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
