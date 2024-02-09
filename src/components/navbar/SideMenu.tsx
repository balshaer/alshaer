import Logo from "../logo/Logo";
import { HiX } from "react-icons/hi";
import NavbarLinks from "./NavbarLinks";
import { useContext, useState } from "react";
import { MenuBarContext } from "../contact/MenuBar";

interface MenuBarContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideMenu() {
  const { isOpen, setIsOpen } = useContext<MenuBarContextProps>(MenuBarContext);
  const [isClosing, setIsClosing] = useState(false);

  function closeMenu() {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen((prev) => !prev);
      setIsClosing(false);
    }, 300);
  }

  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
      className={`flex-col justify-between border-e fixed right-0 bottom-0 top-0 m-auto h-[100vh] bg-[#05050798] w-[100vw] z-50`}
    >
      <div className="relative h-screen w-screen">
        <div className="w-[70vw] h-screen absolute right-0 top-0 bottom-0 m-auto ">
          <div
            className={`flex justify-between items-start flex-col w-full h-full bg-[var(--background)] ${
              isClosing ? "fade-out-right" : "fade-in-right"
            }`}
          >
            <div className="w-full ">
              <header className="w-full  px-4 py-6   flex justify-between items-center ">
                <div>
                  <Logo />
                </div>

                <div onClick={closeMenu}>
                  <HiX
                    className="text-[var(--paragraph)] hover:text-[var(--button)] hovered h-[25px] w-[25px] cursor-pointer"
                    size={25}
                  />
                </div>
              </header>

              <hr className="opacity-15  w-full z-50" />

              <NavbarLinks closeMenu={closeMenu} />
            </div>

            <div className="sticky inset-x-0  w-full py-4">
              <hr className="opacity-15  w-full z-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
