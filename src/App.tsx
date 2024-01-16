// App.tsx
import React from "react";
import "animate.css";
import "../app/globals.css";
import AppRoutes from "@/routes/Routes";
import { Toaster } from "@/components/ui/sonner";

const App: React.FC = () => {
  return (
    <div className="App bg-[var(--background)] max-md:text-sm ">
      <Toaster />
      <AppRoutes />
    </div>
  );
};

export default App;
