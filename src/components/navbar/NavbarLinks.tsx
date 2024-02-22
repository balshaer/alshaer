// NavbarLinks.tsx
import { Link as ScrollLink } from "react-scroll";
import LanguageSelect from "../languageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";

export default function NavbarLinks() {
  const { t } = useTranslation();

  return (
    <ul className="flex font-semibold items-center justify-center gap-4 px-4 max-md:flex-col max-md:h-full max-md:w-full max-md:items-start max-md:text-lg max-md:space-y-1 max-md:px-4 max-md:py-6">
      <ScrollLink
        className="text-[var(--paragraph)] hovered hover:text-[var(--link-color)] cursor-pointer"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {t("Navbar.Projects")}
      </ScrollLink>
      <ScrollLink
        className="text-[var(--paragraph)] hovered hover:text-[var(--link-color)] cursor-pointer"
        to="blog"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {t("Navbar.Blog")}
      </ScrollLink>

      <li>
        <LanguageSelect />
      </li>
    </ul>
  );
}
