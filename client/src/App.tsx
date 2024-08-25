import "animate.css";
import "../app/css/globals.css";
import AppRoutes from "@/__routes";
import { Toaster } from "@/components/ui/sonner";
import { inject } from "@vercel/analytics";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  inject();
  useTranslation();

  return (
    <div className="App bg-[var(--background)] max-md:text-sm ">
      <Toaster className="hidden max-md:block " position="top-center" />
      <Toaster className=" hidden min-[768px]:block" />
      <AppRoutes />
    </div>
  );
};

export default App;
