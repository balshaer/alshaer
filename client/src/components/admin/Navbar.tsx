import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi";
import { LuMoon } from "react-icons/lu";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../custom/Logo";
import SelectLanguage from "../custom/SelectLanguage";
import { sidebarLinks } from "@/data/SidebarLinks";
import { Button } from "../ui/button";
import SelectLanguageAdmin from "../custom/SelectLanguageAdmin";
import { NotificationBell } from "./NotificationBell";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";

const styles = {
  link: "text-[var(--paragraph)] hover:text-[var(--headline)] flex gap-2 rounded-md  text-sm font-medium items-center py-2 hoverd",
  icon: " h-4 w-4",
  dropdownItem:
    "flex items-center w-full h-full flex p-2 text-[var(--headline)] justify-center text-center rounded-md",
  navMenu:
    "text-[var(--headline)] cursor-pointer h-full flex justify-center item-center",
  activeIndicator:
    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0",
};

const iconAnimationVariants = {
  initial: { scale: 1 },
  animate: { scale: [1, 0.9, 1], transition: { duration: 0.2 } },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [currentLanguage, setCurrentLanguage] = React.useState<string>(() => {
    return localStorage.getItem("selectedLanguage") || "en";
  });

  const IconComponent = theme === "light" ? LuMoon : HiOutlineSun;
  const modeText = theme === "light" ? "Dark Mode" : "Light Mode";

  // Handle overflow on menu open/close
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <ToastProvider>
      <nav
        dir="ltr"
        className="z-50 flex items-end justify-end gap-5 bg-[var(--mobile-nav)] text-base backdrop-blur-lg max-md:left-0 max-md:right-0 max-md:top-0 max-md:w-full max-md:rounded-none max-md:px-3 sm:px-6 md:p-0"
      >
        <div className="w-max px-4 max-md:w-full max-md:p-0 md:px-6">
          <div className="flex h-14 items-center justify-between">
            <div className="flex h-full items-center justify-center gap-4 max-md:hidden max-md:gap-2">
              <motion.div
                className={
                  styles.navMenu +
                  "flex h-full items-center justify-center gap-3"
                }
                variants={iconAnimationVariants}
              >
                <NotificationBell />
                <IconComponent onClick={toggleMode} className={"h-5 w-5"} />
                <span className="sr-only">{modeText}</span>
              </motion.div>
              <SelectLanguage
                currentLanguage={currentLanguage}
                onChange={setCurrentLanguage}
              />
            </div>

            {/* Mobile menu toggle */}
            <div className="flex w-full items-center justify-between md:hidden">
              <Logo />
              <motion.button
                className="text-[var(--headline)]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap="animate"
              >
                <motion.div
                  className="flex items-center justify-center gap-4 max-md:gap-3"
                  variants={iconAnimationVariants}
                  initial="initial"
                >
                  <SelectLanguageAdmin
                    currentLanguage={currentLanguage}
                    onChange={setCurrentLanguage}
                  />
                  <div
                    className="flex w-full items-center justify-start rounded-sm text-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMode();
                    }}
                  >
                    <IconComponent className="h-4 w-4 max-md:h-5 max-md:w-5" />
                  </div>
                  <NotificationBell />
                  <div className="flex w-full items-center justify-start rounded-sm text-center">
                    <Menu className="h-4 w-4 max-md:h-5 max-md:w-5" />
                  </div>
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className="fixed inset-0 z-0 h-[100vh] w-full bg-[#00000082]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="fixed bottom-0 left-0 top-0 z-50 m-0 flex h-[100vh] w-[60%] flex-col items-center justify-center overflow-hidden bg-[var(--background)]"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileMenuVariants}
                  >
                    <nav className="absolute left-0 right-[-40px] top-[-9px] m-auto mt-2 flex h-14 w-full items-center justify-end px-8 text-[var(--headline)]">
                      <X
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="h-5 w-5 cursor-pointer"
                      />
                    </nav>
                    <div className="relative flex h-full w-full flex-col items-start justify-center space-y-4 px-2 pb-20">
                      {sidebarLinks.map((item, index) => {
                        const isActive = location.pathname === item.link;
                        return (
                          <Link
                            key={index}
                            className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] ${isActive ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "text-[var(--paragraph)]"}`}
                            to={item.link}
                          >
                            <span>{item.name}</span>
                            {item.icon}
                          </Link>
                        );
                      })}
                      <footer className="absolute bottom-4 left-0 right-0 m-auto flex w-full items-center justify-start">
                        <Button className="mx-2 w-full rounded-lg">
                          Logout
                        </Button>
                      </footer>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <ToastViewport />
    </ToastProvider>
  );
}
