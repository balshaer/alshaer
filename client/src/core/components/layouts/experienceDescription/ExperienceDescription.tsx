/* eslint-disable no-empty-pattern */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import AnimatedComponent from "@/core/components/global/animations/AnimatedComponent";
import { useCompaniesDescription } from "@/core/data/UseCompaniesDescription";
import TitleOfSection from "@/core/components/ui/TitleOfSection";

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
      className="Description flex items-center flex-col justify-start section w-full text-[1rem]"
    >
      <TitleOfSection title={t("Experience.Title")} />
      <AnimatedComponent>
        <div className="cards w-full max-md:w-full min-h-[100px] flex flex-col gap-5">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`card p-4 hover:border-[1px]  hover:border-[var(--border)] max-md:min-w-full flex flex-row gap-4 cursor-pointer hoverd  h-[115px] rounded-xl items-center justify-start max-md:w-full bg-[var(--card-background)] max-md:max-w-full ${
                hoveredIndex !== null && index !== hoveredIndex
                  ? "opacity-[70%] blur-[3px]"
                  : ""
              }`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-[var(--headline)]  font-bold">
                  {company.name}
                </h2>
                <span className="text-[var(--paragraph)]">
                  {company.jobTitle}
                </span>
                <span className="text-[var(--paragraph)] ">{company.date}</span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default ExperienceDescription;
