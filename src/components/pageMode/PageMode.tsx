import React, { useState, useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon, HiX } from "react-icons/hi";
import { VscGithubInverted } from "react-icons/vsc";
import { HiMenu } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { getPageMode, savePageMode } from "@/utils/localStorage";
import DarkMode from "@/themes/Light";
import LightMode from "@/themes/Dark";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NavbarLinks from "../navbar/NavbarLinks";
import Logo from "../logo/Logo";
import Hr from "../navbar/Hr";
import { useTranslation } from "react-i18next";

const PageMode: React.FC = () => {
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

  const IconComponent = mode === "light" ? HiOutlineMoon : HiOutlineSun;

  return (
    <div className="pageMode flex items-center justify-center text-[var(--headline)] gap-4 max-md:gap-2">
      {mode === "light" ? <DarkMode /> : <LightMode />}
      <span onClick={toggleMode} className="h-full cursor-pointer">
        <IconComponent
          className="text-[var(--paragraph)] hover:text-[var(--button)] hovered h-[25px] w-[25px]"
          size={25}
        />
      </span>

      <a
        className="flex items-center justify-center"
        target="_blank"
        href="https://github.com/balshaer/alshaer"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="h-full cursor-pointer max-md:hidden">
                <VscGithubInverted className="text-[var(--paragraph)] hover:text-[var(--button)] hovered h-[25px] w-[25px]" />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <span>{t("Public.StarOnGithub")}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>

      <div className="hidden max-md:flex h-full items-center justify-center ">
        <div className="bg-[var(--background)] h-full flex items-center justify-center">
          <Sheet>
            <SheetTrigger className="h-full">
              <HiMenu
                className="text-[var(--paragraph)] hover:text-[var(--button)] hovered h-[25px] w-[25px] cursor-pointer"
                size={25}
              />
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <div className="flex w-full py-4 px-2 items-center h-max justify-between">
                  <Logo />

                  <SheetTitle className="h-full flex items-center">
                    <SheetClose className="h-full">
                      <button
                        type="submit"
                        className="flex items-center justify-center h-full "
                      >
                        <HiX
                          className="text-[var(--paragraph)] hover:text-[var(--button)] hovered h-[25px] w-[25px] cursor-pointer"
                          size={25}
                        />
                      </button>
                    </SheetClose>
                  </SheetTitle>
                </div>

                <SheetDescription>
                  <NavbarLinks />
                </SheetDescription>
              </SheetHeader>
              <Hr />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default PageMode;
