import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ProjectData, projectData } from "@/data/ProjectData";
import ButtonDefault from "./ui/ButtonDefault";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const limitedProjectData: ProjectData[] = projectData.slice(0, 2);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <div dir={direction} id="projects" className="section w-full">
      <h1 className="section-title">{t("Projects.ProjectsTitle")}</h1>

      <div
        data-aos="fade-up"
        className="cards w-full max-md:w-full min-h-[100px] flex flex-col gap-5"
      >
        {limitedProjectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="py-5">
        <ScrollLink
          to="/projects"
          spy={true}
          smooth={true}
          duration={500}
          onClick={scrollToTop}
        >
          <Link to={"/projects"}>
            <ButtonDefault text={t("Public.SeeMore")} />
          </Link>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Projects;
