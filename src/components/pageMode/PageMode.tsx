import React, { useState, useEffect } from "react";
import { HiSun } from "react-icons/hi";
import { HiMiniMoon } from "react-icons/hi2";

import { getPageMode, savePageMode } from "@/utils/localStorage";
import DarkMode from "@/themes/Light";
import LightMode from "@/themes/Dark";

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

  return (
    <div className="pageMode flex items-center justify-center text-[var(--headline)]">
      {mode === "light" ? <DarkMode /> : <LightMode />}
      <span onClick={toggleMode} className="h-full">
        {mode === "light" ? (
          <HiSun className="cursor-pointer " size={25} />
        ) : (
          <HiMiniMoon className="cursor-pointer " size={25} />
        )}
      </span>
    </div>
  );
};

export default PageMode;
