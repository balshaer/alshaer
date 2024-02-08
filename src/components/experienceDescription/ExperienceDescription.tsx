import { useCompaniesDescription } from "@/data/useCompaniesDescription";
import { useTranslation } from "react-i18next";
import TitleOfSection from "../custom/TitleOfSection";

export default function ExperienceDescription() {
  const { t } = useTranslation();

  const companies = useCompaniesDescription();
  return (
    <div className="Description flex items-center flex-col justify-start ">
      <TitleOfSection title={t("ExperienceDescription.Title")} />

      <div className="cards flex gap-4 flex-wrap w-full">
        {companies.map((company, index) => (
          <div
            key={index}
            className="card flex flex-row gap-4 h-[184px] p-2 w-[49%] max-md:w-full"
          >
            <div>
              <img src={company.logo} alt="companyLogo" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-[var(--headline)]">{company.name}</h2>
              <span className="text-[var(--paragraph)]">
                {company.jobTitle}
              </span>
              <span className="text-[var(--paragraph)] opacity-60">
                {company.date}
              </span>
              <span className="text-[var(--paragraph)]">
                {company.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
