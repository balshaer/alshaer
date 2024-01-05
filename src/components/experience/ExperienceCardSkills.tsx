import React from 'react';

interface ExperienceCard {
  company: string;
  position: string;
  description: string;
  skills?: string[];
}

const ExperienceCardSkills: React.FC<{ experience: ExperienceCard }> = ({ experience }) => {
  return (
    <div className="flex space-x-2 text-sm">
      {experience.skills?.map((skill, index) => (
        <p key={index} className={`bg-[var(--background)] p-2 w-max text-[var(--button-text)] animate`}>
          {skill}
        </p>
      ))}
    </div>
  );
};

export default ExperienceCardSkills;
