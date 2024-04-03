/* eslint-disable no-empty-pattern */
import { useState } from "react";
import { useCompaniesDescription } from "@/data/useCompaniesDescription";
import { useTranslation } from "react-i18next";
import TitleOfSection from "../custom/TitleOfSection";
import i18n from "@/i18n";
import AnimatedComponent from "../animations/AnimatedComponent";

interface Company {
  Link: string;
  logo: string;
  name: string;
  jobTitle: string;
  date: string;
}

interface ExperienceDescriptionProps {}

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const companies: Company[] = useCompaniesDescription();

  return (
    <div
      dir={direction}
      className="Description flex items-center flex-col justify-start section w-full"
    >
      <TitleOfSection title={t("Experience.Title")} />
      <AnimatedComponent>
        <div className="cards w-full max-md:w-full min-h-[100px] flex flex-col gap-5">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`card max-md:min-w-full flex flex-row gap-4 cursor-pointer hoverd  h-[115px] rounded-xl items-center justify-start max-md:w-full bg-[var(--card-background)] p-10 max-md:max-w-full ${
                hoveredIndex !== null && index !== hoveredIndex
                  ? "opacity-40"
                  : ""
              }`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <a className="cursor-pointer" target="_blank" href={company.Link}>
                {/* <img
                  className="h-16 rounded-lg w-16"
                  src={company.logo}
                  alt="companyLogo"
                /> */}
              </a>
              <div className="flex flex-col items-start">
                <h2 className="text-[var(--headline)]">{company.name}</h2>
                <span className="text-[var(--paragraph)]">
                  {company.jobTitle}
                </span>
                <span className="text-[var(--paragraph)] opacity-60">
                  {company.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default ExperienceDescription;
