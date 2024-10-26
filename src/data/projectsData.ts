
export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string; 
  skills: string[];
  links: {
    website?: string;
    github?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "samtax",
    titleKey: "projects.samtax.title",
    descriptionKey: "projects.samtax.description",
    skills: ["React", "Tailwind CSS", "Shadcn UI"],
    links: {
      website: "https://sam-tax.com",
    },
  },

  {
    id: "gradients-css",
    titleKey: "projects.gradientsCss.title",
    descriptionKey: "projects.gradientsCss.description",
    skills: ["Next JS", "Typescript"],
    links: {
      website: "https://example.com/gradients-css",
      github: "https://github.com/example/gradients-css",
    },
  },
  {
    id: "naj-training-center",
    titleKey: "projects.najTrainingCenter.title",
    descriptionKey: "projects.najTrainingCenter.description",
    skills: ["React JS", "Javascript", "MIUI"],
    links: {
      website: "https://example.com/naj-training-center",
    },
  },
  {
    id: "rove",
    titleKey: "projects.rove.title",
    descriptionKey: "projects.rove.description",
    skills: ["React", "Tailwind CSS", "Laravel", "MYSQL"],
    links: {
      github: "https://github.com/example/rove",
    },
  },
  {
    id: "sustainable-star",
    titleKey: "projects.sustainableStar.title",
    descriptionKey: "projects.sustainableStar.description",
    skills: ["React", "Tailwind CSS", "Material UI"],
    links: {
      website: "https://example.com/sustainable-star",
    },
  },
  {
    id: "bookstore-api",
    titleKey: "projects.bookstoreApi.title",
    descriptionKey: "projects.bookstoreApi.description",
    skills: ["Node JS", "Express JS", "Mongoose DB"],
    links: {
      github: "https://github.com/example/bookstore-api",
    },
  },

  {
    id: "frontend-developer-sustainable-star",
    titleKey: "projects.frontendDeveloperSustainableStar.title",
    descriptionKey: "projects.frontendDeveloperSustainableStar.description",
    skills: [
      "React JS",
      "Typescript",
      "Tailwind CSS",
      "Github",
      "Git",
      "RESTful APIs",
    ],
    links: {
      website: "https://example.com/sustainable-star",
    },
  },
];
