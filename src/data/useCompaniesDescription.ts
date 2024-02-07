import { useTranslation } from "react-i18next";

export const useCompaniesDescription = () => {
  const { t } = useTranslation();
  return [
    {
      name: t("Company.Name1"),
      jobTitle: t("Company.JobTitle1"),
      date: t("Company.Date1"),
      description: t("Company.JobDescription1"),
      logo: "",
    },

    {
      name: t("Company.Name2"),
      jobTitle: t("Company.JobTitle2"),
      date: t("Company.Date2"),
      description: t("Company.JobDescription2"),
      logo: ``,
    },

    {
      name: t("Company.Name3"),
      jobTitle: t("Company.JobTitle3"),
      date: t("Company.Date3"),
      description: t("Company.JobDescription3"),
      logo: ``,
    },

    {
      name: t("Company.Name4"),
      jobTitle: t("Company.JobTitle4"),
      date: t("Company.Date4"),
      description: t("Company.JobDescription4"),
      logo: ``,
    },
  ];
};
