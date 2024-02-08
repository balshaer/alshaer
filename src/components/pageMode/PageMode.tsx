import React, { useState, useEffect, useContext } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { VscGithubInverted } from "react-icons/vsc";
import { HiMenu } from "react-icons/hi";

import { getPageMode, savePageMode } from "@/utils/localStorage";
import DarkMode from "@/themes/Light";
import LightMode from "@/themes/Dark";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MenuBarContext } from "../contact/MenuBar";

interface MenuBarContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageMode: React.FC = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = getPageMode();
    return savedMode || "dark";
  });

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    savePageMode(mode);
  }, [mode]);

  const IconComponent = mode === "light" ? HiOutlineMoon : HiOutlineSun;

  const { setIsOpen } = useContext<MenuBarContextProps>(MenuBarContext);

  function openMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="pageMode flex items-center justify-center text-[var(--headline)] gap-4 max-md:gap-2">
      {mode === "light" ? <DarkMode /> : <LightMode />}
      <span onClick={toggleMode} className="h-full cursor-pointer">
        <IconComponent
          className="text-[var(--paragraph)] hover:text-[var(--button)] hovered h-[25px] w-[25px]"
          size={25}
        />
      </span>

      <a target="_blank" href="https://github.com/balshaer/alshaer">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="h-full cursor-pointer max-md:hidden">
                <VscGithubInverted className="text-[var(--paragraph)] hover:text-[var(--button)] hovered h-[25px] w-[25px]" />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Star on github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>

      <span className="hidden max-md:block " onClick={openMenu}>
        <HiMenu
          className="text-[var(--paragraph)] hover:text-[var(--button)] hovered h-[25px] w-[25px] cursor-pointer"
          size={25}
        />
      </span>
    </div>
  );
};

export default PageMode;
