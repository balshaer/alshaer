// data/workData.ts

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  skills: string[]; // Change to an array of strings
}

export const workData: WorkExperience[] = [
  {
    id: "frontend-developer-sustainable-star",
    title: "WorkExperience.FrontendDeveloperSustainableStar.Title",
    company: "Sustainable Star LLC",
    date: "WorkExperience.FrontendDeveloperSustainableStar.Date",
    description: "WorkExperience.FrontendDeveloperSustainableStar.Description",
    skills: [
      "React js",
      "Typescript",
      "Tailwind CSS",
      "Github",
      "Git",
      "RESTful APIs",
    ],
  },
  {
    id: "frontend-developer-ptit",
    title: "WorkExperience.FrontendDeveloperPTIT.Title",
    company: "PTIT",
    date: "WorkExperience.FrontendDeveloperPTIT.Date",
    description: "WorkExperience.FrontendDeveloperPTIT.Description",
    skills: ["React js", "Javascript", "Tailwind CSS", "Github", "Git"],
  },
  {
    id: "software-engineer-intern-gedco",
    title: "WorkExperience.SoftwareEngineerGEDCO.Title",
    company: "GEDCO",
    date: "WorkExperience.SoftwareEngineerGEDCO.Date",
    description: "WorkExperience.SoftwareEngineerGEDCO.Description",
    skills: ["PHP", "MySQL", "Bootstrap"],
  },
];