import { github, linkedin, whatsapp, youtube } from "./Links";

export interface SocialMediaLink {
  title: string;
  link: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    title: "Linkedin",
    link: linkedin,
  },
  {
    title: "Github",
    link: github,
  },
  {
    title: "Whatsapp",
    link: whatsapp,
  },
  {
    title: "Youtube",
    link: youtube,
  },
];

export default socialMediaLinks;
