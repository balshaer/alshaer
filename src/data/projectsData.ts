export interface ProjectCard {
  name: string;
  description: string;
  technologies: string[];
  links: {
    website?: string;
    github?: string;
    other?: string;
  };
}

const projectsData: ProjectCard[] = [
  {
    name: 'NAJ TRAINING CENTER',
    description: 'A center that offers educational services to all dental students in Saudi Arabia.',
    technologies: ['React', 'Typescript', 'Material Ui', 'Framer motion'],
    links: {
      website: 'https://naj.shamilapp.com/',
      github: 'https://github.com/username/naj-training-center',
    },
  },
  {
    name: 'Sustainable Star Landing Page',
    description: 'A pioneering company delivering bespoke and cutting-edge programming solutions.',
    technologies: ['React', 'Typescript', 'Framer motion', 'Material-Tailwind'],
    links: {
      website: 'https://sustainablestar.com.sa/',
      github: 'https://github.com/username/sustainable-star-landing-page',
    },
  },
  {
    name: 'Gradients-CSS',
    description: 'The curated collection of CSS gradients, ready to elevate your design.',
    technologies: ['React'],
    links: {
      website: 'https://gradientscss.vercel.app/',
      github: 'https://github.com/username/gradients-css',
    },
  },
];

export default projectsData;
