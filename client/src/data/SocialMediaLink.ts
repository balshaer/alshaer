export interface SocialMediaLink {
  [x: string]: Key | null | undefined;
  title: string;
  link: string | undefined;
  name: string;
  url: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    _id: "661d6e98c78dcc2d07c0b96d",
    title: "Linkedin",
    link: "https://www.linkedin.com/in/balshaer/",
    __v: 0,
  },
  {
    _id: "661d6ea8c78dcc2d07c0b970",
    title: "Github",
    link: "https://github.com/balshaer",
    __v: 0,
  },
  {
    _id: "661d6eb8c78dcc2d07c0b973",
    title: "Whatsapp",
    link: "https://wa.me/970593493899",
    __v: 0,
  },
  {
    _id: "661d6ec6c78dcc2d07c0b976",
    title: "Youtube",
    link: "https://www.youtube.com/@Codewithbaraa",
    __v: 0,
  },
];

export default socialMediaLinks;
