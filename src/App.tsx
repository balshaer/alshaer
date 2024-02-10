// App.tsx
import React from "react";
import "animate.css";
import "../app/globals.css";
import AppRoutes from "@/routes/__routes";
import { Toaster } from "@/components/ui/sonner";
import { inject } from "@vercel/analytics";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  inject();
  useTranslation();

  return (
    <div className="App bg-[var(--background)] max-md:text-sm ">
      <Toaster />
      <AppRoutes />
    </div>
  );
};

export default App;
