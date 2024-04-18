import { useState } from "react";

import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/core/components/ui/breadcrumb";
import { ProjectData, projectData } from "@/core/data/ProjectData";
import ProjectSelect from "@/core/components/layouts/projectSelect/projectSelect";
import Navbar from "@/core/components/layouts/navbar/Navbar";
import AnimatedComponent from "@/core/components/global/animations/AnimatedComponent";
import ProjectCard from "@/core/components/layouts/projects/ProjectCard";
import Footer from "@/core/components/layouts/footer/Footer";

interface Option {
  value: string;
  label: string;
}

export default function AllProjects() {
  const { t } = useTranslation();

  const projectTypes: Option[] = [
    { value: "all", label: t("Public.All") },
    { value: "FrontEnd", label: "FrontEnd" },
    { value: "BackEnd", label: "BackEnd" },
    { value: "Fullstack", label: "Fullstack" },
  ];

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
          <div className="projectCards flex flex-col w-full gap-5 min-h-[75vh] max-md:py-24 py-10 max-md:pb-0">
            <h1 className="text-[var(--headline)] text-2xl font-bold  flex flex-col gap-4 max-md:pt-10">
              <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight">
                {t("ProjectsSection.Title")}
              </span>
            </h1>

            <p className="text-[var(--paragraph)] text-lg max-md:text-lg max-md:w-full max-md:max-w-none">
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

            {filteredProjects.length === 0 ? (
              <p className="text-[var(--paragraph)] text-lg max-md:text-lg max-md:w-full max-md:max-w-none">
                {t("Projects.NotFound")}
              </p>
            ) : (
              filteredProjects.map((project: ProjectData, index: number) => (
                <ProjectCard key={index} {...project} />
              ))
            )}
          </div>
        </AnimatedComponent>
        <Footer />
      </div>
    </div>
  );
}
