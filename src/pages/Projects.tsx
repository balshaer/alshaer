import DescriptionOfSection from "@/components/custom/DescriptionOfSection";
import TitleOfSection from "@/components/custom/TitleOfSection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  return (
    <ScrollArea className="h-full w-full">
      <div className="container h-max min-h-[100vh] flex flex-col gap-[1.5rem]">
        <Navbar />

        <div>
          <TitleOfSection title={"Projects"} />

          <DescriptionOfSection description="I've worked on tons of little projects but these are the ones that I'm proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved." />

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
        </div>

        <Footer />
      </div>
    </ScrollArea>
  );
};

export default Projects;
