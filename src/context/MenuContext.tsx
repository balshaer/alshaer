import React, { createContext, useState, ReactNode } from "react";

interface MenuContextType {
  isOpen: any;
  setIsOpen: any;
}

export const MenuContext = createContext<MenuContextType | any>(
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
