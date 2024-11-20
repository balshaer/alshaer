import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { LuLogOut } from "react-icons/lu";
import Cookies from "js-cookie";
import Logo from "@/components/custom/Logo";
import { Button } from "@/components/ui/button";
import { MenuContext } from "@/context/MenuContext";
import { sidebarLinks } from "@/data/SidebarLinks";

export default function Sidebar() {
  const { setIsOpen } = useContext(MenuContext);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    try {
      Cookies.remove("Bearer");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="hidden h-screen w-64 flex-col justify-between bg-[var(--card-background)] p-4 text-[var(--headline)] md:flex">
      <div>
        <header className="relative flex items-center justify-between py-4">
          <Link to="/admin/profile">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            className="md:hidden"
          >
            <HiXMark className="h-6 w-6" />
          </Button>
        </header>

        <nav className="mt-6 space-y-2">
          {sidebarLinks.map((item, index) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={index}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] ${
                  isActive
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                    : "text-[var(--paragraph)]"
                }`}
                to={item.link}
              >
                <span>{item.name}</span>
                {item.icon}
              </Link>
            );
          })}
        </nav>
      </div>

      <Button
        variant="outline"
        className="w-full items-center justify-center"
        onClick={handleLogout}
      >
        <LuLogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  );
}
