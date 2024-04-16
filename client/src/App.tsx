// App.tsx
import React, { useEffect, useState } from "react";
import "animate.css";
import "../app/globals.css";
import AppRoutes from "@/routes/__routes";
import { Toaster } from "@/components/ui/sonner";
import { inject } from "@vercel/analytics";
import { useTranslation } from "react-i18next";
import PageLoading from "./components/loading/PageLoading";

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
      {isLoading && <PageLoading />}
      <Toaster />
      <AppRoutes />
    </div>
  );
};

export default App;
