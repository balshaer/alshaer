import { createContext, useState, ReactNode } from "react";

interface MenuBarContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuBarContext = createContext<MenuBarContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

interface MenuBarProps {
  children: ReactNode;
}

export default function MenuBar({ children }: MenuBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuBarContext.Provider>
  );
}
