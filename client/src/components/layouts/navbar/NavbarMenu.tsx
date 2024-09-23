import React, { useEffect } from "react";
import { HiMenu, HiOutlineSun } from "react-icons/hi";
import { LuMoon } from "react-icons/lu";
import DarkMode from "@/themes/Light";
import LightMode from "@/themes/Dark";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight, Languages, MessageCircle } from "lucide-react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import i18n from "@/i18n";
import { useMode } from "@/context/ModeContext";
import { email, github, linkedin, whatsapp } from "@/data/Links";
import { useTheme } from "@/context/ThemeContext";

const NavbarMenu: React.FC = () => {
  const { mode } = useMode();
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("pageMode", mode);
  }, [mode]);

  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const IconComponent = theme === "light" ? LuMoon : HiOutlineSun;
  const modeText = theme === "light" ? "Dark Mode" : "Light Mode";

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const languageText =
    i18n.language === "ar"
      ? t("LanguageSelector.en")
      : t("LanguageSelector.ar");

  const styles = {
    linkItem: "hoverd hover:ms-2 cursor-pointer",
    dropDownMenu:
      "bg-transparent p-0 text-[var(--menu-color)] outline-none hover:outline-none focus:outline-none border-none hover:bg-transparent opacity-100 hovered cursor-pointer hover:text-[var(--paragraph)]",
  };

  return (
    <div>
      {mode === "light" ? <DarkMode /> : <LightMode />}

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className={styles.dropDownMenu} asChild>
            <Button variant="outline">
              <HiMenu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[var(--background)] text-[var(--menu-color)]">
            <DropdownMenuLabel className="pt-2">
              {t("Public.Links")}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="h-[1px] opacity-40" />
            <DropdownMenuGroup>
              <Link to={"/projects"}>
                <DropdownMenuItem className={styles.linkItem}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span> {t("DropdownMenu.Projects")}</span>
                </DropdownMenuItem>
              </Link>

              <Link to={github}>
                <DropdownMenuItem className={styles.linkItem}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span> {t("DropdownMenu.Github")}</span>
                </DropdownMenuItem>
              </Link>

              <Link to={linkedin}>
                <DropdownMenuItem className={styles.linkItem}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span> {t("DropdownMenu.Linkedin")}</span>
                </DropdownMenuItem>
              </Link>

              <Link to={whatsapp}>
                <DropdownMenuItem className={styles.linkItem}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span> {t("DropdownMenu.Whatsapp")}</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>

            <DropdownMenuLabel className="pt-2">
              <span> {t("DropdownMenu.Actions")}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="h-[1px] opacity-40" />

            <DropdownMenuGroup>
              <Link to={`mailto:${email}`} target="_blank">
                <DropdownMenuItem className="hoverd cursor-pointer">
                  <MessageCircle className="mr-2 h-4 w-4" />{" "}
                  {t("DropdownMenu.SayHi")}
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem
                onClick={toggleMode}
                className="hoverd cursor-pointer"
              >
                <span className="cursor-pointer">
                  <IconComponent className="mr-2 h-4 w-4" size={25} />
                </span>

                <span>{modeText}</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="hoverd cursor-pointer"
                onClick={toggleLanguage}
              >
                <Languages className="mr-2 h-4 w-4" />
                <span>{languageText}</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavbarMenu;
