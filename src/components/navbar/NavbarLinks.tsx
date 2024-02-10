// NavbarLinks.tsx
import { Link } from "react-router-dom";
import LanguageSelect from "../languageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";

export default function NavbarLinks() {
  const { t } = useTranslation();

  return (
    <ul className="flex items-center justify-center gap-4 px-4 font-[600] max-md:flex-col max-md:h-full max-md:w-full max-md:items-start max-md:text-lg max-md:space-y-1 max-md:px-4 max-md:py-6 ">
      <Link
        className="text-[var(--paragraph)] hovered  hover:text-[var(--link-color)]"
        to="/"
      >
        {t("Navbar.Home")}
      </Link>
      <Link
        className="text-[var(--paragraph)] hovered  hover:text-[var(--link-color)]"
        to="/about"
      >
        {t("Navbar.About")}
      </Link>
      <Link
        className="text-[var(--paragraph)] hovered  hover:text-[var(--link-color)]"
        to="/projects"
      >
        {t("Navbar.Projects")}
      </Link>
      <Link
        className="text-[var(--paragraph)] hovered  hover:text-[var(--link-color)]"
        to="/blog"
      >
        {t("Navbar.Blog")}
      </Link>

      <li>
        <LanguageSelect />
      </li>
    </ul>
  );
}
