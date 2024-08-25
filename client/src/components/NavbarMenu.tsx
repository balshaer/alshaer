import React, { useState, useEffect } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
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
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import i18n from "@/i18n";
import { getPageMode, savePageMode } from "@/lib/localStorage";

const NavbarMenu: React.FC = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = getPageMode();
    return savedMode || "dark";
  });
  const { t } = useTranslation();
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    savePageMode(mode);
  }, [mode]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const modeText = mode === "light" ? t("mode.dark") : t("mode.light");
  const languageText =
    i18n.language === "ar"
      ? t("LanguageSelector.en")
      : t("LanguageSelector.ar");

  const IconComponent = mode === "light" ? LuMoon : HiOutlineSun;

  const styles = {
    linkItem: "hoverd hover:ms-2 cursor-pointer",
    dropDownMenu:
      "bg-transparent p-0 text-[var(--menu-color)] outline-none hover:outline-none focus:outline-none border-none hover:bg-transparent opacity-100 hovered cursor-pointer hover:text-[var(--paragraph)]",
  };

  return (
    <div>
      {mode === "light" ? <DarkMode /> : <LightMode />}

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className={styles.dropDownMenu} asChild>
            <Button variant="outline">
              <HiMenu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56  bg-[var(--background)] text-[var(--menu-color)]">
            <DropdownMenuLabel className="pt-2">
              {t("Public.Links")}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="opacity-40 h-[1px]" />
            <DropdownMenuGroup>
              <Link to={"/projects"}>
                <DropdownMenuItem className={styles.linkItem}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span> {t("DropdownMenu.Projects")}</span>
                </DropdownMenuItem>
              </Link>

              <Link to={"https://github.com/balshaer/"}>
                <DropdownMenuItem className={styles.linkItem}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span> {t("DropdownMenu.Github")}</span>
                </DropdownMenuItem>
              </Link>

              <Link to={"https://www.linkedin.com/in/balshaer/"}>
                <DropdownMenuItem className={styles.linkItem}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span> {t("DropdownMenu.Linkedin")}</span>
                </DropdownMenuItem>
              </Link>

              <Link to={"https://wa.me/970593493899"}>
                <DropdownMenuItem className={styles.linkItem}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span> {t("DropdownMenu.Whatsapp")}</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>

            <DropdownMenuLabel className="pt-2">
              <span> {t("DropdownMenu.Actions")}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="opacity-40 h-[1px]" />

            <DropdownMenuGroup>
              <DropdownMenuItem className="hoverd  cursor-pointer">
                <MessageCircle className="mr-2 h-4 w-4" />
                <a href={`mailto:${process.env.EMAIL}`} target="_blank">
                  {" "}
                  {t("DropdownMenu.SayHi")}
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={toggleMode}
                className="hoverd  cursor-pointer"
              >
                <span className=" cursor-pointer">
                  <IconComponent className="mr-2 h-4 w-4" size={25} />
                </span>

                <span>{modeText}</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="hoverd  cursor-pointer"
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
