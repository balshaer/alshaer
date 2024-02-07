import { Link } from "react-router-dom";
import LanguageSelect from "../languageSelect/LanguageSelect";

export default function NavbarLinks() {
  return (
    <ul
      className="flex items-center justify-center gap-4 px-4 font-[600] max-md:flex-col max-md:h-full max-md:w-full max-md:items-start max-md:text-lg 
    max-md:space-y-1 max-md:px-4 max-md:py-6
    "
    >
      <li className="hidden max-md:block text-[var(--nav-item)] text-md hover:text-[var(--link-color)]">
        <Link to="/">Home</Link>
      </li>

      <li className="text-[var(--nav-item)] text-md hover:text-[var(--link-color)]">
        <Link to="/experience">Experience</Link>
      </li>

      <li className="text-[var(--nav-item)] text-md hover:text-[var(--link-color)]">
        <Link to="/projects">projects</Link>
      </li>
      <hr className="hidden max-md:block opacity-15  w-full z-50" />

      <li className="">
        <LanguageSelect />
      </li>
    </ul>
  );
}
