import { t } from "i18next";
import { github, linkedin, youtube } from "./Links";

interface footerLinksType {
  title: string;
  link: string;
}

const footerLinks: footerLinksType[] = [
  {
    title: t("FooterLinks.youtube"),
    link: youtube,
  },
  {
    title: t("FooterLinks.github"),
    link: github,
  },

  {
    title: t("FooterLinks.projects"),
    link: "/projects",
  },
  {
    title: t("FooterLinks.linkedin"),
    link: linkedin,
  },
];

export default footerLinks;
