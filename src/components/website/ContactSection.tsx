import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { t } from "i18next";
import { github, linkedin, whatsapp, youtube } from "@/data/Links";

export interface SocialMediaLink {
  title: string;
  link: string;
}

const ContactSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLinkHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  const styles = {
    socialLink:
      "flex contact-title capitalize text-[1rem] items-center  hoverd gap-2  max-md:flex max-md:flex-row h-[100%] w-full",
    socialLinkHover:
      "flex contact-title capitalize text-[1rem] items-center  hoverd gap-2  max-md:flex max-md:flex-row h-[100%] w-full opacity-40",
  };

  const socialMediaLinks: SocialMediaLink[] = [
    {
      title: t("FooterLinks.linkedin"),
      link: linkedin,
    },
    {
      title: t("FooterLinks.github"),
      link: github,
    },
    {
      title: t("FooterLinks.whatsapp"),
      link: whatsapp,
    },
    {
      title: t("FooterLinks.youtube"),
      link: youtube,
    },
  ];

  return (
    <ul
      className={
        "hovered section flex items-start gap-4 py-[8px] text-[1rem] text-[var(--paragraph)] max-md:w-full max-md:flex-col"
      }
    >
      {socialMediaLinks.map((item, index) => (
        <li
          className={
            "max-md:w-full max-md:bg-[var(--card-background)] max-md:px-[8px] max-md:py-[14px] rounded-lg"
          }
          key={index}
        >
          <a
            className={` ${
              hoveredIndex !== null && index !== hoveredIndex
                ? styles.socialLinkHover
                : styles.socialLink
            }`}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            onMouseEnter={() => handleLinkHover(index)}
            onMouseLeave={() => handleLinkHover(null)}
          >
            <span className="hidden h-full items-center justify-center max-md:flex">
              <FiExternalLink />
            </span>
            <span className="flex h-full items-center justify-center">
              .{item.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactSection;
