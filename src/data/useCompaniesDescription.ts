import { useTranslation } from "react-i18next";

export const useCompaniesDescription = () => {
  const { t } = useTranslation();
  return [
    {
      name: t("Experience.Company.Name1"),
      jobTitle: t("Experience.Company.JobTitle1"),
      date: t("Experience.Company.Date1"),
      logo: "https://media.licdn.com/dms/image/C4D0BAQEoRWPbHQJcLA/company-logo_200_200/0/1679780532892?e=1715212800&v=beta&t=_48NiWS1MFcYaeM5T66gwAMZ-gywk6_cgJtJiPrnDCc",
      Link: "https://sustainablestar.com.sa/",
    },

    {
      name: t("Experience.Company.Name2"),
      jobTitle: t("Experience.Company.JobTitle2"),
      date: t("Experience.Company.Date2"),
      logo: "https://media.licdn.com/dms/image/D560BAQE1XtZYN-dKQQ/company-logo_100_100/0/1701933560849?e=1715212800&v=beta&t=QKnrbLCdSMUCQQgIP8rxm8-5lxK9EhbJq5fRZY36gxI",

      Link: "http://ptit.com.sa/",
    },

    {
      name: t("Experience.Company.Name3"),
      jobTitle: t("Experience.Company.JobTitle3"),
      date: t("Experience.Company.Date3"),
      logo: "https://cdn.dribbble.com/userupload/13065544/file/original-c6fe6cb85d8e1ed4c1f4e7ed1b574757.png?resize=400x400",
      Link: "https://www.facebook.com/Gedcops/?locale=ar_AR",
    },
  ];
};
