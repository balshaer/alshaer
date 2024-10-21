import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi";
import { LuMoon } from "react-icons/lu";
import { Menu, X, Home, Briefcase, FolderGit2, Languages } from "lucide-react";
import Logo from "../../ui/Logo";
import { useTheme } from "@/context/ThemeContext";
import i18n from "@/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const styles = {
  link: "text-[var(--paragraph)] hoverd  hover:text-[var(--headline)] flex rounded-md text-sm font-medium items-center py-2",
  icon: "mr-2 h-4 w-4",
  dropdownItem:
    "flex items-center w-full p-2 text-[var(--headline)] justify-center text-center rounded-md",
  navMenu: "text-[var(--headline)] cursor-pointer",
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
    x: "100%",
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
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const IconComponent = theme === "light" ? LuMoon : HiOutlineSun;
  const modeText = theme === "light" ? "Dark Mode" : "Light Mode";

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    toast(t("Language changed"));
  };

  const languageText =
    i18n.language === "ar"
      ? t("LanguageSelector.en")
      : t("LanguageSelector.ar");

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Work", path: "/work", icon: Briefcase },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
  ];

  return (
    <nav className="flex items-center justify-between gap-5 rounded-3xl border border-zinc-700/40 bg-[var(--card-background)] px-5 text-base max-md:px-3 sm:px-6">
      <div className="container mx-auto px-0">
        <div className="flex h-14 items-center justify-between">
          <Link to={"/"} className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="hidden h-full items-center justify-center md:flex">
            <div className="ml-6 flex h-full items-center justify-center gap-8">
              <AnimatePresence>
                {navItems.map((item) => (
                  <div
                    className="relative flex h-full items-center justify-center"
                    key={item.name}
                  >
                    <Link
                      to={item.path}
                      className={`${styles.link} ${
                        location.pathname === item.path
                          ? "text-[var(--headline)]"
                          : ""
                      }`}
                    >
                      <item.icon className={styles.icon} />
                      <span>{item.name}</span>
                    </Link>
                    {location.pathname === item.path && (
                      <motion.div
                        className={styles.activeIndicator}
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex gap-2 max-md:hidden">
            <motion.div
              className={styles.navMenu}
              onClick={toggleMode}
              whileTap="animate"
            >
              <motion.div variants={iconAnimationVariants} initial="initial">
                <IconComponent className={styles.icon} />
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.navMenu}
              onClick={toggleLanguage}
              whileTap="animate"
            >
              <motion.div variants={iconAnimationVariants} initial="initial">
                <Languages className={styles.icon} />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center justify-center md:hidden">
            <motion.button
              className="text-[var(--headline)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap="animate"
            >
              <motion.div variants={iconAnimationVariants} initial="initial">
                {!isMobileMenuOpen && <Menu className="h-5 w-5" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="fixed inset-y-0 right-0 z-50 flex w-full items-center justify-center bg-[var(--background)] p-3 shadow-lg"
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
              >
                <nav className="absolute left-0 right-0 top-3 m-auto mt-2 flex h-14 w-full items-center justify-end px-8 text-[var(--headline)]">
                  <X
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h-5 w-5 cursor-pointer"
                  />
                </nav>

                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={styles.dropdownItem}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  ))}

                  <Button
                    className={
                      "flex w-full items-center justify-start rounded-sm text-center"
                    }
                    onClick={() => {
                      toggleMode();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <IconComponent />

                    <span>{modeText}</span>
                  </Button>
                  <Button
                    variant={"outline"}
                    className={
                      "flex w-full items-center justify-start rounded-sm text-center"
                    }
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Languages className="h-4 w-4" />

                    <span>{languageText}</span>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
