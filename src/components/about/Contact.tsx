import React, { useState } from "react";
import TitleOfSection from "../custom/TitleOfSection";
import AnimatedComponent from "../animations/AnimatedComponent";
import { useTranslation } from "react-i18next";

interface SocialMediaLink {
  name: string;
  url: string;
  iconSrc: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/balshaer/",
    iconSrc: "https://img.icons8.com/color/48/linkedin.png",
  },
  {
    name: "Github",
    url: "https://github.com/balshaer",
    iconSrc:
      "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-github-community-for-software-building-and-testing-online-logo-shadow-tal-revivo.png",
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/970593493899",
    iconSrc: "https://img.icons8.com/color/48/whatsapp.png",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/baraa",
    iconSrc:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@Codewithbaraa",
    iconSrc: "https://img.icons8.com/color/48/youtube-play.png",
  },
];

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

        <ul className="text-[var(--paragraph)] max-md:flex-col items-start hovered flex gap-4">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a
                className={`flex flex-row-reverse items-center hovered gap-2 w-full ${
                  hoveredIndex !== null && index !== hoveredIndex
                    ? "opacity-40"
                    : ""
                }`}
                target="_blank"
                href={link.url}
                onMouseEnter={() => handleLinkHover(index)}
                onMouseLeave={() => handleLinkHover(null)}
              >
                <span>{link.name}</span>
                <span>
                  <img
                    width="20"
                    height="20"
                    src={link.iconSrc}
                    alt={link.name}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </AnimatedComponent>
    </section>
  );
};

export default Contact;
