import AnimatedComponent from "@/components/animations/AnimatedComponent";
import DescriptionOfSection from "@/components/custom/DescriptionOfSection";
import TitleOfSection from "@/components/custom/TitleOfSection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import i18n from "@/i18n";

import { t } from "i18next";
import React from "react";

interface ProjectCardProps {
  titleKey: string;
  descriptionKey: string;
  link: string;
  logoSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  titleKey,
  descriptionKey,
  link,
  logoSrc,
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="h-32 rounded-lg bg-[var(--card-background)] border-[#323a4d] hover:border-[#596788] hovered border cursor-pointer">
      <div className="flex p-4 gap-4 items-center justify-start h-full w-full">
        <div className="p-2">
          <img src={logoSrc} alt="logo" height={50} width={50} />
        </div>

        <div className="flex gap-1 flex-col">
          <span className="text-[var(--headline)]">{t(titleKey)}</span>
          <span className="text-[var(--paragraph)]">{t(descriptionKey)}</span>
        </div>
      </div>
    </div>
  </a>
);

const Projects: React.FC = () => {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <ScrollArea className="h-full w-full">
      <div className="container h-max min-h-[100vh] flex flex-col gap-[1.5rem]">
        <Navbar />

        <div dir={direction}>
          <AnimatedComponent>
            <TitleOfSection title={t("ProjectsSection.Title")} />
          </AnimatedComponent>
          <AnimatedComponent>
            <DescriptionOfSection
              description={t("ProjectsSection.Description")}
            />
          </AnimatedComponent>

          <AnimatedComponent>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-8">
              <ProjectCard
                titleKey="Projects.Project1.Title"
                descriptionKey="Projects.Project1.Description"
                link="https://naj.shamilapp.com/"
                logoSrc="https://naj.shamilapp.com/static/media/Logo.db28aec4cb4cdcd75f2cb1cf4be26384.svg"
              />

              <ProjectCard
                titleKey="Projects.Project2.Title"
                descriptionKey="Projects.Project2.Description"
                link="https://github.com/balshaer/gradients-css"
                logoSrc="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-colors-photography-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
              />
            </div>
          </AnimatedComponent>
        </div>

        <Footer />
      </div>
    </ScrollArea>
  );
};

export default Projects;
