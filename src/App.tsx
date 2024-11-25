import "animate.css";
import "../app/css/globals.css";
import AppRoutes from "@/routes/__routes";
import { Toaster } from "@/components/ui/sonner";
import { inject } from "@vercel/analytics";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";
import { useLocation } from "react-router-dom";

const App: React.FC = () => {
  inject();
  useTranslation();
  const location = useLocation();

  const isNotFoundPage =
    location.pathname !== "/" &&
    location.pathname !== "/projects" &&
    location.pathname !== "/work";

  return (
    <div className="App flex min-h-screen flex-col bg-[var(--background)]">
      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8">
        {!isNotFoundPage && <Navbar />}

        <Toaster className="hidden max-md:block" position="bottom-center" />
        <Toaster className="hidden min-[768px]:block" />
        <AppRoutes />
      </main>
      {!isNotFoundPage && <Footer />}
    </div>
  );
};

export default App;
