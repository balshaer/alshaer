import React from 'react';

interface ExperienceCard {
  company: string;
  position: string;
  description: string;
  skills?: string[];
}

const ExperienceCardSkills: React.FC<{ experience: ExperienceCard }> = ({ experience }) => {
  return (
    <div className="flex space-x-2 max-md:flex-wrap max-md:items-start max-md:justify-start max-md:w-full max-md:m-0  max-md:gap-2 ">
      {experience.skills?.map((skill, index) => (
        <p key={index} className={` bg-[var(--background)] max-md:m-0 p-2 w-max text-[var(--button-text)]  `}>
          {skill}
        </p>
      ))}
    </div>
  );
};

export default ExperienceCardSkills;
