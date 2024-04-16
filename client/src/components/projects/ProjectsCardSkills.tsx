import React from "react";

interface ProjectCard {
  name: string;
  description: string;
  technologies?: string[];
}

const ProjectCardSkills: React.FC<{ project: ProjectCard }> = ({ project }) => {
  return (
    <div className="flex space-x-2 max-md:flex-wrap max-md:items-start max-md:justify-start max-md:w-full max-md:m-0  max-md:gap-2 ">
      {project.technologies?.map((technologies, index) => (
        <p
          key={index}
          className={` text-xs bg-[var(--background)] max-md:m-0 p-2 w-max text-[var(--button-text)]  `}
          style={{ margin: "0" }}
        >
          {technologies}
        </p>
      ))}
    </div>
  );
};

export default ProjectCardSkills;
