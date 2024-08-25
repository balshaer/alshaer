import socialMediaLinks from "@/data/SocialMediaLink";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const Contact: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLinkHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  const styles = {
    socialLinks:
      "max-md:flex-col items-start hovered flex gap-4  text-[var(--paragraph)] text-[1rem] py-[8px] max-md:w-full pt-[2rem]",
    socialItems:
      "max-md:bg-[var(--card-background)] max-md:py-[14px] max-md:w-full max-md:px-[8px] ",
    socialLink:
      "flex contact-title capitalize text-[1rem] items-center  hoverd gap-2  max-md:flex max-md:flex-row h-[100%] w-full",
    socialLinkHover:
      "flex contact-title capitalize text-[1rem] items-center  hoverd gap-2  max-md:flex max-md:flex-row h-[100%] w-full opacity-40",
  };

  return (
    <ul data-aos="fade-up" className={styles.socialLinks}>
      {socialMediaLinks.map((item, index) => (
        <li className={styles.socialItems} key={index}>
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
            <span className="hidden max-md:flex h-full  justify-center items-center">
              <FiExternalLink />
            </span>
            <span className="h-full flex justify-center items-center">
              .{item.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Contact;
