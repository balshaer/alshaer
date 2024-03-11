import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import TitleOfSection from "@/components/custom/TitleOfSection";
import ButtonDefault from "@/components/custom/ButtonDefault";
import { Link } from "react-router-dom";
import { projectData, ProjectData } from "@/data/projectData";
import ProjectCard from "@/components/projects/ProjectCard";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const limitedProjectData: ProjectData[] = projectData.slice(0, 2);

  return (
    <div dir={direction} id="projects" className="section w-full">
      <TitleOfSection title={t("ProjectsSection.Title")} />
      <div
        data-aos="fade-up"
        className="cards w-full max-md:w-full min-h-[100px] flex flex-col gap-5"
      >
        {limitedProjectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="py-5">
        <Link to={"/projects"}>
          <ButtonDefault text="see more" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
