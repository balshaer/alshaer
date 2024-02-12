import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";
import i18n from "@/i18n";
import AnimatedComponent from "@/components/animations/AnimatedComponent";
import DescriptionOfSection from "@/components/custom/DescriptionOfSection";
import TitleOfSection from "@/components/custom/TitleOfSection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NajLogo from "@/assets/images/logo/naj.jpeg";
import gradimixLogo from "@/assets/images/logo/gradimix.png";
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
      <div className="h-40 rounded-lg bg-[var(--card-background)] border-[#323a4d] hover:border-[#596788] hovered border cursor-pointer">
        <div className="flex p-4 gap-4 items-start justify-start h-full w-full flex-col ">
          <div className="flex items-center justify-start gap-4">
            <div className="p-2">
              <img
                src={logoSrc}
                className="min-h-10 min-w-10 rounded-lg object-contain"
                alt="logo"
                height={50}
                width={50}
              />
            </div>
            <div className="flex gap-1 flex-col">
              <span className="text-[var(--headline)]">{t(titleKey)}</span>
              <span className="text-[var(--paragraph)]">
                {t(descriptionKey)}
              </span>
            </div>
          </div>

          {badgeText && (
            <div className="flex gap-2">
              {badgeText.map((badge, index) => (
                <Badge
                  key={index}
                  className="m-[5px] cursor-text bg-[var(--badge-color)] text-[var(--paragraph)]"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <ScrollArea className="h-full w-full">
      <div className="container h-max min-h-[100vh]  max-w-7xl flex flex-col gap-[1.5rem]">
        <Navbar />

        <AnimatedComponent>
          <div dir={direction}>
            <TitleOfSection title={t("ProjectsSection.Title")} />

            <DescriptionOfSection
              description={t("ProjectsSection.Description")}
            />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-8">
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
            </div>
          </div>
        </AnimatedComponent>

        <Footer />
      </div>
    </ScrollArea>
  );
};

export default Projects;
