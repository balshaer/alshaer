interface ProjectData {
  titleKey: string;
  descriptionKey: string;
  link: string;
  type: "Frontend" | "Backend" | "Fullstack";
  badgeText?: string[];
  visitWebsite: string;
  visitGithub: string;
}

const projectData: ProjectData[] = [
  {
    titleKey: "Projects.Project1.Title",
    descriptionKey: "Projects.Project1.Description",
    link: "https://naj.shamilapp.com/",
    badgeText: ["React JS", "Javascript", "MIUI"],
    visitWebsite: "https://naj.shamilapp.com/",
    visitGithub: "#",
    type: "Frontend",
  },
  {
    titleKey: "Projects.Project2.Title",
    descriptionKey: "Projects.Project2.Description",
    link: "https://github.com/balshaer/gradients-css",
    badgeText: ["Next JS", "Typescript"],
    visitWebsite: "gradientscss.vercel.app/",
    visitGithub: "https://github.com/balshaer/gradients-css",
    type: "Frontend",
  },
  {
    titleKey: "Projects.Project3.Title",
    descriptionKey: "Projects.Project3.Description",
    link: "https://github.com/balshaer/rove",
    badgeText: ["React", "Tailwind CSS", "Laravel", "MYSQL"],
    visitWebsite: "#",
    visitGithub: "https://github.com/balshaer/rove",
    type: "Fullstack",
  },

  {
    titleKey: "Projects.Project4.Title",
    descriptionKey: "Projects.Project4.Description",
    link: "https://sustainablestar.com.sa/",
    badgeText: ["React", "Tailwind CSS", "Material UI"],
    visitWebsite: "https://sustainablestar.com.sa/",
    visitGithub: "#",
    type: "Frontend",
  },

  {
    titleKey: "Projects.Project5.Title",
    descriptionKey: "Projects.Project5.Description",
    link: "https://github.com/balshaer/bookstore-api",
    badgeText: ["Node JS", "Express JS", "Mongoose DB"],
    visitWebsite: "#",
    visitGithub: "https://github.com/balshaer/bookstore-api",
    type: "Backend",
  },
];

export { projectData };
export type { ProjectData };
