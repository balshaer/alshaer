export interface ExperienceCard {
  company: string;
  position: string;
  description: string;
  skills?: string[]; 
  links: {
    website: string;
    github: string;
  };
}

const experienceData: ExperienceCard[] = [
  {
    company: 'Sustainable Star LLC',
    position: 'Frontend Developer',
    description: '- Development of a dynamic landing page.\n- Key role in the SFB (Sustainable Star form builder) project.\n- Developed a control panel for SFB.',
    skills: ['React', 'TypeScript', 'Redux', 'Framer Motion', 'Styled-Components'],
    links: {
      website: '/',
      github: 'https://github.com/username/naj-training-center',
    }
  },
  {
    company: 'PTIT',
    position: 'Frontend Developer',
    description: '• Executed code repairs and updates for outdated packages, ensuring codebase integrity.\n• Developed the "Naj Training Center" project.\n• Development of a control panel, optimizing user interaction.',
    skills: ['React', 'TypeScript', 'Redux', 'Framer Motion', 'Styled-Components'],
    links: {
      website: 'https://naj.shamilapp.com/',
      github: 'https://github.com/username/naj-training-center',
    }
  },
  {
    company: 'GEDCO',
    position: 'Software Engineer',
    description: '• Completed an intensive training program in database management, gaining advanced skills in operations and maintenance.\n• Demonstrated expertise in database operations, ensuring data integrity and reliability.\n• Received comprehensive training on server functionalities and operations, enhancing proficiency in server management and troubleshooting.',
    skills: ['php', 'My SQL'],
    links: {
      website: '/',
      github: 'https://github.com/username/naj-training-center',
    }
  },
];

export default experienceData;
