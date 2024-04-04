// NavbarLinks.tsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import LanguageSelect from "../languageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";

export default function NavbarLinks() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLinkHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  return (
    <ul className="flex font-semibold items-center justify-center gap-4 px-4 max-md:flex-col max-md:h-full max-md:w-full max-md:items-start max-md:text-lg max-md:space-y-1 max-md:px-4 max-md:py-6">
      {[
        { to: "projects", label: t("Navbar.Projects") },
        // { to: "blog", label: t("Navbar.Blog") },
      ].map((link, index) => (
        <li key={index}>
          <ScrollLink
            className={`text-[var(--paragraph)] hovered cursor-pointer ${
              hoveredIndex !== null && index !== hoveredIndex
                ? "opacity-40"
                : ""
            }`}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onMouseEnter={() => handleLinkHover(index)}
            onMouseLeave={() => handleLinkHover(null)}
          >
            {link.label}
          </ScrollLink>
        </li>
      ))}

      <li>
        <LanguageSelect />
      </li>
    </ul>
  );
}
