import { Link } from "react-router-dom";
import LanguageSelect from "../languageSelect/LanguageSelect";
import { t } from "i18next";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  closeMenu: () => void;
}

export default function NavbarLinks({ closeMenu }: NavItemProps) {
  return (
    <ul className="flex items-center justify-center gap-4 px-4 font-[600] max-md:flex-col max-md:h-full max-md:w-full max-md:items-start max-md:text-lg max-md:space-y-1 max-md:px-4 max-md:py-6">
      <NavItem
        to="/"
        className="max-md:block hidden text-[var(--nav-item)] text-md hover:text-[var(--link-color)]"
        onClick={closeMenu}
        closeMenu={closeMenu} // Add closeMenu prop here
      >
        {t("Navbar.Home")}
      </NavItem>
      <NavItem to="/about" onClick={closeMenu} closeMenu={closeMenu}>
        {t("Navbar.About")}
      </NavItem>
      <NavItem to="/projects" onClick={closeMenu} closeMenu={closeMenu}>
        {t("Navbar.Projects")}
      </NavItem>
      <NavItem to="/blog" onClick={closeMenu} closeMenu={closeMenu}>
        {t("Navbar.Blog")}
      </NavItem>
      <hr className="hidden max-md:block opacity-15 w-full z-50" />
      <li>
        <LanguageSelect />
      </li>
    </ul>
  );
}

function NavItem({ to, children, ...rest }: NavItemProps) {
  return (
    <li
      className="text-[var(--nav-item)] text-md hover:text-[var(--link-color)]"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
}
