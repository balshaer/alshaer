import { Link } from "react-router-dom";
import LanguageSelect from "../languageSelect/LanguageSelect";

export default function NavbarLinks() {
  return (
    <ul className="flex items-center justify-center gap-4 px-4 font-[600] max-md:flex-col max-md:h-full max-md:w-full max-md:items-start max-md:text-lg max-md:space-y-1 max-md:px-4 max-md:py-6">
      <NavItem
        to="/"
        className="max-md:block hidden text-[var(--nav-item)] text-md hover:text-[var(--link-color)]"
      >
        Home
      </NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <hr className="hidden max-md:block opacity-15 w-full z-50" />
      <li>
        <LanguageSelect />
      </li>
    </ul>
  );
}

function NavItem({ to, children, ...rest }) {
  return (
    <li
      className="text-[var(--nav-item)] text-md hover:text-[var(--link-color)]"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
}
