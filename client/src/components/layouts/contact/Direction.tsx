import { createContext, useState, ReactNode } from "react";

interface DirectionContextProps {
  isDir: boolean;
  setIsDir: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DirectionContext = createContext<DirectionContextProps>({
  isDir: false,
  setIsDir: () => {},
});

interface DirectionProps {
  children: ReactNode;
}

export default function Direction({ children }: DirectionProps) {
  const [isDir, setIsDir] = useState(false);

  return (
    <DirectionContext.Provider value={{ isDir, setIsDir }}>
      {children}
    </DirectionContext.Provider>
  );
}
