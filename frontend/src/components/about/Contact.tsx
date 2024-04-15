import React, { useEffect, useState } from "react";
import TitleOfSection from "../custom/TitleOfSection";
import AnimatedComponent from "../animations/AnimatedComponent";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface SocialMediaLink {
  title: string;
  link: string | undefined;
  name: string;
  url: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [fetchedLinks, setFetchedLinks] = useState<SocialMediaLink[]>([]);

  const handleLinkHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/socialLinks/show"
        );
        setFetchedLinks(res.data);

        console.log(res.data);
      } catch (error) {
        console.log("Failed to fetch data with error: " + error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="section" data-aos="fade-up">
      <AnimatedComponent>
        <TitleOfSection title={t("About.Contact.FindMe")} />

        <ul className="text-[var(--paragraph)] max-md:flex-col items-start hovered flex gap-4 ">
          {fetchedLinks.map((item, index) => (
            <li key={index}>
              <a
                className={`flex flex-row-reverse items-center  hovered gap-2 w-full ${
                  hoveredIndex !== null && index !== hoveredIndex
                    ? "opacity-40"
                    : ""
                }`}
                target="_blank"
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
