import React, { useEffect, useState } from "react";
import "animate.css";
import "../app/css/globals.css";
import AppRoutes from "@/routes/__routes";
import { Toaster } from "@/core/components/ui/sonner";
import { inject } from "@vercel/analytics";
import { useTranslation } from "react-i18next";
import LoadingPage from "./core/components/layouts/loading/LoadingPage";


const App: React.FC = () => {
  inject();
  useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App bg-[var(--background)] max-md:text-sm ">
      {isLoading && <LoadingPage />}
      <Toaster />
      <AppRoutes />
    </div>
  );
};

export default App;
