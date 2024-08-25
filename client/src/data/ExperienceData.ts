interface experienceDataType {
  companyName: string;
  jobTitle: string;
  jobDate: string;
  Link: string;
  jobDescription: string;
  skills: string[];
}

const experienceData: experienceDataType[] = [
  {
    companyName: "Experience.Company.Name1",
    jobTitle: "Experience.Company.JobTitle1",
    jobDate: "Experience.Company.Date1",
    Link: "https://sustainablestar.com.sa/",
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
    Link: "http://ptit.com.sa/",
    jobDescription: "Experience.Company.Description2",
    skills: ["React js", "Javascript", "Tailwind CSS", "Github", "Git"],
  },

  {
    companyName: "Experience.Company.Name3",
    jobTitle: "Experience.Company.JobTitle3",
    jobDate: "Experience.Company.Date3",
    Link: "https://www.facebook.com/Gedcops/?locale=ar_AR",
    jobDescription: "Experience.Company.Description3",
    skills: ["PHP", "MySQL", "Bootstrap"],
  },
];

export { experienceData };
export type { experienceDataType };
