import { createContext, useState } from "react";

export const MenuBarContext = createContext();

export default function MenuBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuBarContext.Provider>
  );
}
