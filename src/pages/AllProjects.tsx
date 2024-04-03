// AllProjects.tsx
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectData, ProjectData } from "@/data/projectData";
import ProjectSelect from "@/components/projectSelect/projectSelect";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import AnimatedComponent from "@/components/animations/AnimatedComponent";
import Footer from "@/components/footer/Footer";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div dir={direction} className="h-[100vd] w-full">
      <div className="hidden">
        <Navbar />
      </div>
      <div className="Navbar max-w-3xl m-auto py-[20px] flex px-10 flex-row justify-between items-center w-full  max-md:fixed max-md:top-0 max-md:right-0 max-md:left-0 max-md:m-auto max-md:px-8 max-md:z-50  max-md:backdrop-blur-2xl max-md:border-b-[1px] max-md:border-b-[#ffffff20] ">
        <Link
          to={"/"}
          className="text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer"
        >
          <HiArrowSmLeft />
        </Link>

        <div>
          <ProjectSelect
            options={projectTypes}
            defaultValue={projectTypes[0]}
            onSelect={handleTypeChange}
          />
        </div>
      </div>
      <div className="container h-max min-h-[100vh] max-w-3xl flex flex-col gap-[1.5rem]">
        <AnimatedComponent>
          <div className="projectCards  flex flex-col  w-full gap-5 min-h-[75vh] max-md:py-32 py-10 max-md:pb-0">
            <h1 className="text-[var(--headline)] text-2xl font-bold  flex flex-col gap-4 max-md:pt-10">
              <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight">
                {t("ProjectsSection.Title")}
              </span>
            </h1>

            <p className="text-[var(--paragraph)]   text-lg max-md:text-lg max-md:w-full max-md:max-w-none">
              {t("Projects.ProjectsHeadline")}
            </p>

            <span className="py-5 ">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="hover:text-[var(--paragraph)]  hoverd "
                      href="/"
                    >
                      {t("Navbar.Home")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <div>
                    {i18n.language === "ar" && (
                      <>
                        <BreadcrumbSeparator
                          style={{ transform: "rotate(180deg)" }}
                        />
                      </>
                    )}

                    {i18n.language === "en" && (
                      <>
                        <BreadcrumbSeparator />
                      </>
                    )}
                  </div>

                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="hover:text-[var(--paragraph)]  hoverd "
                      href="/projects"
                    >
                      {t("Navbar.Projects")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </span>

            {filteredProjects.map((project: ProjectData, index: number) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </AnimatedComponent>
        <Footer />
      </div>
    </div>
  );
}
