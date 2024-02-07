import { useCompaniesDescription } from "@/data/useCompaniesDescription";
import { useTranslation } from "react-i18next";

export default function ExperienceDescription() {
  const { t } = useTranslation();

  // Define an array of company information
  const companies = useCompaniesDescription();
  return (
    <div className="Description flex items-center flex-col justify-start">
      <div className="w-full flex justify-start items-center py-4 text-[var(--headline)] text-2xl font-bold">
        <h1>{t("ExperienceDescription.Title")}</h1>
      </div>

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
