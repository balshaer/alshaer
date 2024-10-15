import React, { createContext, useState, ReactNode } from "react";

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined,
);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
