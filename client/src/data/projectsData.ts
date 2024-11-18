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
    skills: [
      "React JS",
      "Typescript",
      "Tailwind CSS",
      "Github",
      "Git",
      "RESTful APIs",
    ],
    links: {
      website: "https://gradients.vercel.app",
      github: "https://github.com/balshaer/gradients-css",
    },
  },
  {
    id: "raouf-zadi",
    titleKey: "projects.raoufzadi.title",
    descriptionKey: "projects.raoufzadi.description",
    skills: ["React JS", "Typescript", "Tailwind CSS", "Github", "Git"],
    links: {
      website: "https://raoufzadi.vercel.app",
    },
  },

  {
    id: "naj-training-center",
    titleKey: "projects.najTrainingCenter.title",
    descriptionKey: "projects.najTrainingCenter.description",
    skills: ["React JS", "Javascript", "MIUI"],
    links: {
      website: "https://naj.shamilapp.com/",
    },
  },
  {
    id: "rove",
    titleKey: "projects.rove.title",
    descriptionKey: "projects.rove.description",
    skills: ["React", "Tailwind CSS", "Laravel", "MYSQL"],
    links: {
      github: "https://github.com/balshaer/rove",
    },
  },
  {
    id: "sustainable-star",
    titleKey: "projects.sustainableStar.title",
    descriptionKey: "projects.sustainableStar.description",
    skills: ["React", "Tailwind CSS", "Material UI"],
    links: {
      website: "https://sustainablestar.com.sa/",
    },
  },
  {
    id: "bookstore-api",
    titleKey: "projects.bookstoreApi.title",
    descriptionKey: "projects.bookstoreApi.description",
    skills: ["Node JS", "Express JS", "Mongoose DB"],
    links: {
      github: "https://github.com/balshaer/bookstore-api",
    },
  }
];
