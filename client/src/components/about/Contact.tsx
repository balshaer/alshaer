import React, { useState } from "react";
import TitleOfSection from "../custom/TitleOfSection";
import AnimatedComponent from "../animations/AnimatedComponent";
import { useTranslation } from "react-i18next";
import socialMediaLinks from "@/data/SocialMediaLink";

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

        <ul className="text-[var(--paragraph)] max-md:flex-col items-start hovered flex gap-4 ">
          {socialMediaLinks.map((item, index) => (
            <li key={index}>
              <a
                className={`flex flex-row-reverse items-center  hovered gap-2 w-full ${
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
