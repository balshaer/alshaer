import React from 'react';

interface ProjectCard {
  name: string;
  description: string;
  technologies?: string[];
}

const ProjectCardSkills: React.FC<{ project: ProjectCard }> = ({ project }) => {
  return (
    <div className="flex space-x-2  ">
      {project.technologies?.map((technologies, index) => (
        <p key={index} className={`bg-[var(--background)] p-2 w-max text-[var(--button-text)] animate`}>
          {technologies}
        </p>
      ))}
    </div>
  );
};

export default ProjectCardSkills;
