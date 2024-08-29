import { github, linkedin, youtube } from "./Links";

interface footerLinksType {
  title: string;
  link: string;
}

const footerLinks: footerLinksType[] = [
  {
    title: "Youtube",
    link: youtube,
  },
  {
    title: "Github",
    link: github,
  },

  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Linkedin",
    link: linkedin,
  },
];

export default footerLinks;
