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
import "animate.css";
import { MenuProvider } from "./context/MenuContext.tsx";
import { ModeProvider } from "./context/ModeContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <MenuProvider>
        <LanguageProvider>
          <ThemeProvider>
            <ModeProvider>
              <ToastProvider>
                <I18nextProvider i18n={i18n}>
                  <BrowserRouter>
                    <SpeedInsights />
                    <App />
                    <ToastViewport />
                  </BrowserRouter>
                </I18nextProvider>
              </ToastProvider>
            </ModeProvider>
          </ThemeProvider>
        </LanguageProvider>
      </MenuProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
