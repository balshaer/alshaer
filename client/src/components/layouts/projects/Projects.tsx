import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ProjectData, projectData } from "@/data/ProjectData";
import { Button } from "@/components/ui/button";

const ProjectsSection: React.FC = () => {
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
        className="cards flex min-h-[100px] w-full flex-col gap-5 max-md:w-full"
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
            <Button>{t("Public.SeeMore")}</Button>
          </Link>
        </ScrollLink>
      </div>
    </div>
  );
};

export default ProjectsSection;
