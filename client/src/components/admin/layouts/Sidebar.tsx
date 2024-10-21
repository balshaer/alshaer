import { useContext } from "react";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { MenuContext } from "@/context/MenuContext";
import { sidebarLinks } from "@/data/admin/SidebarLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { LuLogOut } from "react-icons/lu";
import Cookies from "js-cookie";

export default function Sidebar() {
  const context = useContext(MenuContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (context === undefined) {
    throw new Error("Sidebar must be used within a MenuProvider ");
  }

  const { isOpen, setIsOpen } = context;

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handelLogout = () => {
    try {
      Cookies.remove("Bearer");
      navigate("/admin/login");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex h-[100vh] w-1/5 flex-col justify-between bg-[var(--card-background)] p-4 text-[var(--headline)] max-md:fixed max-md:inset-0 max-md:z-50 max-md:w-full">
      <header className="relative flex items-center justify-center py-4 max-md:justify-end">
        <Link to={"/admin/profile"} className="max-md:hidden">
          <Logo />
        </Link>

        {isOpen && (
          <HiXMark
            onClick={closeMenu}
            className="h-6 w-6 font-bold text-[var(--paragraph)]"
          />
        )}
      </header>

      <div className="relative flex h-full flex-col items-start gap-6 py-4 max-md:w-full max-md:items-center max-md:justify-center max-md:gap-8 max-md:text-center max-md:font-bold">
        {sidebarLinks.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link
              key={index}
              className={`flex w-full items-center justify-between text-base font-medium max-md:flex max-md:w-full max-md:items-center max-md:justify-center max-md:text-center max-md:font-bold ${isActive && "activeLink"}`}
              to={item.link}
            >
              <span>{item.name}</span>
              <span>{item.icon}</span>
            </Link>
          );
        })}
      </div>

      <footer className="w-full py-4">
        <Button icon={<LuLogOut />} onClick={handelLogout} className="w-full">
          Logout
        </Button>
      </footer>
    </div>
  );
}
