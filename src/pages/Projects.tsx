import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import TitleOfSection from "@/components/custom/TitleOfSection";
import NajLogo from "@/assets/images/logo/naj.jpeg";
import gradimixLogo from "@/assets/images/logo/gradimix.png";
import roveLogo from "@/assets/images/logo/roveLogo.png";

import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  titleKey: string;
  descriptionKey: string;
  link: string;
  logoSrc: string;
  badgeText?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  titleKey,
  descriptionKey,
  link,
  logoSrc,
  badgeText,
}) => {
  const { t } = useTranslation();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="h-[150px] rounded-lg bg-[var(--card-background)]  overed cursor-pointer">
        <div className="flex p-4 gap-4 items-start justify-start h-full w-full flex-col ">
          <div className="flex items-start justify-start gap-4">
            <img
              src={logoSrc}
              className="h-[50px] w-[50px] rounded-lg object-contain"
              alt="logo"
            />
            <div className="flex gap-1  flex-col">
              <span className="text-[var(--headline)] font-bold">
                {t(titleKey)}
              </span>
              <span className="text-[var(--paragraph)]">
                {t(descriptionKey)}
              </span>
              {badgeText && (
                <div className="flex gap-2 my-2 flex-wrap">
                  {badgeText.map((badge, index) => (
                    <Badge
                      key={index}
                      className=" cursor-text bg-[var(--badge-color)] text-[var(--badge-text)]"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div dir={direction}  id="projects" className="py-10 w-full">
      <TitleOfSection title={t("ProjectsSection.Title")} />

      <div data-aos="fade-up" className="cards  w-full max-md:w-full min-h-[100px] flex flex-col gap-5 ">
        <ProjectCard
          titleKey="Projects.Project1.Title"
          descriptionKey="Projects.Project1.Description"
          link="https://naj.shamilapp.com/"
          logoSrc={NajLogo}
          badgeText={["React JS", "Material ui"]}
        />

        <ProjectCard
          titleKey="Projects.Project2.Title"
          descriptionKey="Projects.Project2.Description"
          link="https://github.com/balshaer/gradimix"
          logoSrc={gradimixLogo}
          badgeText={["Next JS", "Typescript"]}
        />

        <ProjectCard
          titleKey="Projects.Project3.Title"
          descriptionKey="Projects.Project3.Description"
          link="https://github.com/balshaer/rove"
          logoSrc={roveLogo}
          badgeText={["React", "Tailwind CSS", "Laravel", "MYSQL"]}
        />
      </div>
    </div>
  );
};

export default Projects;
