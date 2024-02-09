import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";
import App from "./App.tsx";
import "./index.css";
import "../app/globals.css";
import MenuBar from "@/components/contact/MenuBar.tsx";
import Direction from "./components/contact/Direction.tsx";

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Direction>
        <MenuBar>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MenuBar>
      </Direction>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
