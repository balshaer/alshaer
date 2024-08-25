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
} from "@/components/ui/breadcrumb";

import ProjectSelect from "@/components/ui/projectSelect";
import Footer from "@/components/Footer";
import { scrollToTop } from "@/helper";
import NavbarMenu from "@/components/NavbarMenu";
import { ProjectData, projectData } from "@/data/ProjectData";
import ProjectCard from "@/components/ProjectCard";

interface Option {
  value: string;
  label: string;
}

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeChange = (selectedOption: Option) => {
    setSelectedType(
      selectedOption.value === "all" ? null : selectedOption.value
    );
  };

  const projectTypes: Option[] = [
    { value: "all", label: t("Public.All") },
    { value: "FrontEnd", label: "FrontEnd" },
    { value: "BackEnd", label: "BackEnd" },
    { value: "Fullstack", label: "Fullstack" },
  ];

  const filteredProjects = projectData.filter(
    (project) => !selectedType || project.type === selectedType
  );
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)]  hoverd ",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
  };

  return (
    <div dir={direction} className="min-h-[100dvh] w-full">
      <div className="hidden">
        <NavbarMenu />
      </div>

      <div className="container">
        <div className="main-navbar">
          <Link to={"/"} onClick={scrollToTop} className={styles.arrowIcon}>
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
      </div>
      <div className="container">
        <div className="projectCards flex flex-col w-full gap-5 min-h-[100vh]  max-md:pb-0">
        <div className="header">
            <h1 className="header-title">{t("ProjectsSection.Title")}</h1>
            <p className="description max-w-[100%]">
              {t("Projects.ProjectsHeadline")}
            </p>
            <div className="py-5">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink className={styles.breadcrumbLink} href="/">
                      {t("Navbar.Home")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <div>
                    {i18n.language === "ar" ? (
                      <BreadcrumbSeparator
                        style={{ transform: "rotate(180deg)" }}
                      />
                    ) : (
                      <BreadcrumbSeparator />
                    )}
                  </div>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className={styles.breadcrumbLink}
                      href="/projects"
                    >
                      {t("Navbar.Projects")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <div className="projects-cards flex flex-col gap-[2rem] pb-[4rem]">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
