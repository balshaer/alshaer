import React, { useContext, useEffect } from "react";
import { MenuContext } from "@/context/MenuContext";
import { HiMenu, HiOutlineSun } from "react-icons/hi";
import { LuMoon } from "react-icons/lu";
import DarkMode from "@/themes/Light";
import LightMode from "@/themes/Dark";
import { Languages } from "lucide-react"; 
import i18n from "@/i18n";
import { useMode } from "@/context/ModeContext";
import { useTheme } from "@/context/ThemeContext";
import Logo from "@/components/ui/Logo";

const Navbar: React.FC = () => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error("Navbar must be used within a MenuProvider");
  }

  const { setIsOpen } = context;

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const { mode } = useMode();

  useEffect(() => {
    localStorage.setItem("pageMode", mode);
  }, [mode]);

  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const IconComponent = theme === "light" ? LuMoon : HiOutlineSun;

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="z-40 flex h-[60px] w-full items-center justify-end bg-[var(--background)] p-4 text-[var(--headline)] max-md:justify-between">
      <div className="hidden max-md:block">
        <Logo />
      </div>

      {mode === "light" ? <DarkMode /> : <LightMode />}

      <div className="flex items-center gap-4">
        <div className="hoverd flex cursor-pointer items-center justify-center gap-3">
          <div onClick={toggleMode} className="cursor-pointer">
            <IconComponent className="h-5 w-5" size={25} />
          </div>

          <div className="hoverd cursor-pointer" onClick={toggleLanguage}>
            <Languages className="h-5 w-5" />
          </div>
          <div>
            <HiMenu
              onClick={toggleMenu}
              className="hidden h-6 w-6 cursor-pointer max-md:block"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
