import Navbar from '@/components/navbar/Navbar';
import experienceData, { ExperienceCard } from '@/data/experienceData'; 
import React, { useState, useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import ExperienceCardSkills from '@/components/experience/ExperienceCardSkills';
import ExperienceSkeleton from '@/components/skeleton/ExperienceSkeleton';
import { t } from 'i18next';

const Experience: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const animate = "animate__animated animate__fadeIn";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const openWebsite = (website: string | undefined) => {
    if (website) {
      window.open(website, '_blank');
    }
  };
  

  return (
    <div className="container h-[100vh] flex flex-col gap-[1rem]  max-w-2xl text-sm ">
      <Navbar />

      <>
        <p className="text-xl font-bold mb-4 text-[var(--headline)]">{t('Experience.WorkExperience')}</p>

        <ScrollArea className="h-[100%] w-[100%] rounded-md mb-5 ">
          <div>
            {experienceData.map((experience: ExperienceCard, index: number) => (
              <div key={index} className="mb-4 bg-[var(--card-background)] py-5 px-5 ">
                {isLoading ? (
                  <div className='card-content flex flex-col gap-3 h-full w-full'>
                    <ExperienceSkeleton />
                  </div>
                ) : (
                  <div className='card-content flex flex-col experience-card gap-3 h-full w-full  max-md:w-full'>
                    <p
                      className={`text-xl font-semibold  text-[var(--headline)] cursor-pointer max-md:w-full ${animate}`}
                      onClick={() => openWebsite(experience.links.website)}
                    >
                      {experience.company}
                    </p>
                    <div>
                      <p className={`text-paragraph max-md:w-full max-md:max-w-[100%]  text-[var(--paragraph)] ${animate}`}>{experience.position}</p>
                      <p className={`text-paragraph max-md:w-full text-[var(--paragraph)] ${animate}`}>{experience.description}</p>
                    </div>
                    <ExperienceCardSkills  experience={experience} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </>
    </div>
  );
};

export default Experience;
