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
      logo: "https://scontent-mrs2-2.xx.fbcdn.net/v/t39.30808-1/347426201_1168901333803601_2781139689308930147_n.png?stp=dst-png_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=596444&_nc_ohc=HnAmeUupOjcAX8L01tb&_nc_ht=scontent-mrs2-2.xx&oh=00_AfCW8SkKNGzaXc7M8Bk1dOJbeOJGEBc4ZnGzmLdBmOAtzQ&oe=65CB2CBE",
      Link: "https://www.facebook.com/Gedcops/?locale=ar_AR",
    },
  ];
};
