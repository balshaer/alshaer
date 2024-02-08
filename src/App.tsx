// App.tsx
import React from "react";
import "animate.css";
import "../app/globals.css";
import AppRoutes from "@/routes/__routes";
import { Toaster } from "@/components/ui/sonner";
import SideMenu from "./components/navbar/SideMenu";

const App: React.FC = () => {
  return (
    <div className="App bg-[var(--background)] max-md:text-sm ">
      <Toaster />
      <AppRoutes />
      <SideMenu />
    </div>
  );
};

export default App;
