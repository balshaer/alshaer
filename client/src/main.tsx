import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import "../app/css/globals.css";
import i18n from "./i18n.ts";
import AOS from "aos";
import "aos/dist/aos.css";
import Direction from "./core/components/layouts/contact/Direction.tsx";
import MenuBar from "./core/components/layouts/contact/MenuBar.tsx";
AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <Direction>
      <MenuBar>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </I18nextProvider>
      </MenuBar>
    </Direction>
  </React.StrictMode>,
  document.getElementById("root")
);
