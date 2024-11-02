import { t } from "i18next";
import { github, linkedin, whatsapp, youtube } from "./Links";

export interface SocialMediaLink {
  title: string;
  link: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    title: t("FooterLinks.linkedin"),
    link: linkedin,
  },
  {
    title: t("FooterLinks.github"),
    link: github,
  },
  {
    title: t("FooterLinks.whatsapp"),
    link: whatsapp,
  },
  {
    title: t("FooterLinks.youtube"),
    link: youtube,
  },
];

export default socialMediaLinks;
