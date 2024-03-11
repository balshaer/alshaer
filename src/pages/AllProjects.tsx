// AllProjects.tsx
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import TitleOfSection from "@/components/custom/TitleOfSection";
import { useTranslation } from "react-i18next";
import { projectData, ProjectData } from "@/data/projectData";
import ProjectSelect from "@/components/projectSelect/projectSelect";

interface Option {
  value: string;
  label: string;
}

const projectTypes: Option[] = [
  { value: "all", label: "All" },
  { value: "FrontEnd", label: "FrontEnd" },
  { value: "BackEnd", label: "BackEnd" },
  { value: "Fullstack", label: "Fullstack" },
];

export default function AllProjects() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeChange = (selectedOption: Option) => {
    setSelectedType(
      selectedOption.value === "all" ? null : selectedOption.value
    );
  };

  const filteredProjects = projectData.filter((project) => {
    if (selectedType) {
      return project.type === selectedType;
    } else {
      return true;
    }
  });

  return (
    <div className="h-full w-full">
      <div className="container h-max min-h-[100vh] max-w-3xl flex flex-col gap-[1.5rem]">
        <Navbar />

        <div className="w-full py-5 flex justify-between">
          <TitleOfSection title={t("ProjectsSection.Title")} />

          <ProjectSelect
            options={projectTypes}
            defaultValue={projectTypes[0]} 
            onSelect={handleTypeChange}
            
          />
        </div>

        <div className="projectCards w-full flex flex-col gap-5 py-5">
          {filteredProjects.map((project: ProjectData, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
