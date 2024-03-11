import NajLogo from "@/assets/images/logo/naj.jpeg";
import gradimixLogo from "@/assets/images/logo/gradimix.png";
import roveLogo from "@/assets/images/logo/roveLogo.png";

interface ProjectData {
  titleKey: string;
  descriptionKey: string;
  link: string;
  logoSrc: string;
  type: "FrontEnd" | "BackEnd" | "Fullstack";
  badgeText?: string[];
}

const projectData: ProjectData[] = [
  {
    titleKey: "Projects.Project1.Title",
    descriptionKey: "Projects.Project1.Description",
    link: "https://naj.shamilapp.com/",
    logoSrc: NajLogo,
    badgeText: ["React JS", "Material ui"],
    type: "FrontEnd",
  },
  {
    titleKey: "Projects.Project2.Title",
    descriptionKey: "Projects.Project2.Description",
    link: "https://github.com/balshaer/gradimix",
    logoSrc: gradimixLogo,
    badgeText: ["Next JS", "Typescript"],
    type: "FrontEnd",
  },
  {
    titleKey: "Projects.Project3.Title",
    descriptionKey: "Projects.Project3.Description",
    link: "https://github.com/balshaer/rove",
    logoSrc: roveLogo,
    badgeText: ["React", "Tailwind CSS", "Laravel", "MYSQL"],
    type: "Fullstack",
  },
];

export { projectData };
export type { ProjectData };
