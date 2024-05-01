import socialMediaLinks from "@/core/data/SocialMediaLink";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import AnimatedComponent from "@/core/components/global/animations/AnimatedComponent";
import TitleOfSection from "@/core/components/ui/TitleOfSection";
import { FiExternalLink } from "react-icons/fi";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLinkHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  return (
    <section className="section" data-aos="fade-up">
      <AnimatedComponent>
        <TitleOfSection title={t("About.Contact.FindMe")} />

        <ul className="text-[var(--paragraph)] text-[1rem] max-md:flex-col items-start hovered flex gap-4 ">
          {socialMediaLinks.map((item, index) => (
            <li key={index}>
              <a
                className={`flex flex-row-reverse contact-title uppercase text-[1rem] items-center  hoverd gap-2 w-full ${
                  hoveredIndex !== null && index !== hoveredIndex
                    ? "opacity-40"
                    : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                onMouseEnter={() => handleLinkHover(index)}
                onMouseLeave={() => handleLinkHover(null)}
              >
                <span className="hidden max-md:block">
                  <FiExternalLink />
                </span>
                <span>.{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </AnimatedComponent>
    </section>
  );
};

export default Contact;
