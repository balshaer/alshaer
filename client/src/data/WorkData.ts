import { companies } from "./Links";

interface workDataType {
  companyName: string;
  jobTitle: string;
  jobDate: string;
  Link: string;
  jobDescription: string;
  skills: string[];
}

const workData: workDataType[] = [
  {
    companyName: "Experience.Company.Name1",
    jobTitle: "Experience.Company.JobTitle1",
    jobDate: "Experience.Company.Date1",
    Link: companies.sustainablestar,
    jobDescription: "Experience.Company.Description1",
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
    companyName: "Experience.Company.Name2",
    jobTitle: "Experience.Company.JobTitle2",
    jobDate: "Experience.Company.Date2",
    Link: companies.ptit,
    jobDescription: "Experience.Company.Description2",
    skills: ["React js", "Javascript", "Tailwind CSS", "Github", "Git"],
  },

  {
    companyName: "Experience.Company.Name3",
    jobTitle: "Experience.Company.JobTitle3",
    jobDate: "Experience.Company.Date3",
    Link: companies.gedco,
    jobDescription: "Experience.Company.Description3",
    skills: ["PHP", "MySQL", "Bootstrap"],
  },
];

export { workData };
export type { workDataType };
