import Navbar from "@/components/navbar/Navbar";
import projectsData, { ProjectCard } from "@/data/projectsData";
import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectsSkeleton from "@/components/skeleton/ProjectsSkeleton";
import ProjectCardSkills from "@/components/projects/ProjectsCardSkills";
import { t } from "i18next";

const Projects: React.FC = () => {
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
      window.open(website, "_blank");
    }
  };

  return (
    <div className="container h-[100vh] flex flex-col gap-[1rem]   ">
      <Navbar />

      <>
        <p className="font-bold mb-4 text-[var(--headline)]">
          {t("Projects.Projects")}
        </p>
        <ScrollArea className="h-[100%] w-[100%] rounded-md mb-5 ">
          <div>
            {projectsData.map((project: ProjectCard, index: number) => (
              <div
                key={index}
                className="mb-4 bg-[var(--card-background)] py-5 px-5 "
              >
                {isLoading ? (
                  <div className="card-content flex flex-col gap-3 h-full w-full">
                    <ProjectsSkeleton />
                  </div>
                ) : (
                  <div className="card-content flex flex-col gap-3 h-full w-full ">
                    <p
                      className={` font-semibold text-[var(--headline)] cursor-pointer ${animate}`}
                      onClick={() => openWebsite(project.links.website)}
                    >
                      {project.name}
                    </p>
                    <div>
                      <p
                        className={`text-paragraph text-[var(--paragraph)] ${animate}`}
                      >
                        {project.description}
                      </p>
                    </div>

                    <ProjectCardSkills project={project} />
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

export default Projects;
