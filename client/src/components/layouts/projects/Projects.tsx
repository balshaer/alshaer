import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  badge?: string[];
  visitWebsite?: string;
  visitGithub?: string;
  links?: { url: string }[];
}

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const [setProjects] = useState<any>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("API_ENDPOINT_HERE");
        const data: ProjectData[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <div dir={direction} id="projects" className="section w-full">
      <h1 className="section-title">{t("Projects.ProjectsTitle")}</h1>

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
