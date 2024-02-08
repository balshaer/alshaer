import { useCompaniesDescription } from "@/data/useCompaniesDescription";
import { useTranslation } from "react-i18next";
import TitleOfSection from "../custom/TitleOfSection";

export default function ExperienceDescription() {
  const { t } = useTranslation();

  const companies = useCompaniesDescription();
  return (
    <div className="Description flex items-center flex-col justify-start py-8 ">
      <TitleOfSection title={t("Experience.Title")} />

      <div className="cards flex gap-10 flex-wrap w-full min-h-[100px]">
        {companies.map((company, index) => (
          <div
            key={index}
            className="card flex flex-row gap-4 h-[84px] p-2 w-max max-md:w-full"
          >
            <a className="cursor-pointer" target="_blank" href={company.Link}>
              <img
                className="h-16 rounded-lg w-16"
                src={company.logo}
                alt="companyLogo"
              />
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
    </div>
  );
}
