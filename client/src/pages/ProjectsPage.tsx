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

import { PageTitle, scrollToTop } from "@/helper";

import NavbarMenu from "@/components/layouts/navbar/NavbarMenu";
import Footer from "@/components/layouts/footer/Footer";
import { PageTitlesData } from "@/data/PageTitlesData";
import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { ImGithub } from "react-icons/im";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { endpoints } from "@/API/API";

interface ProjectCardProps {
  title: string;
  description: string;
  links: {
    website: string;
    github: string;
  }[];
  badge?: string[];
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);

  useEffect(() => {
    axios
      .get(endpoints.getAllProjects)
      .then((response) => setProjects(response.data));
  }, []);

  const { t } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)]  hoverd ",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd  hover:opacity-100",
  };

  return (
    <div dir={direction} className="page">
      {/* <PageTitle title={PageTitlesData.projects} /> */}

      <div className="hidden">
        <NavbarMenu />
      </div>

      <div className="container">
        <div className="main-navbar">
          <Link to={"/"} onClick={scrollToTop} className={styles.arrowIcon}>
            <HiArrowSmLeft />
          </Link>
          <div></div>
        </div>
      </div>

      <div className="container">
        <div className="projectCards flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0">
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

          <div className="projects-cards flex flex-col gap-8 pb-16">
            {projects.length === 0 && (
              <p className="text-lg text-[var(--paragraph)] max-md:w-full max-md:max-w-none max-md:text-lg">
                {t("Projects.NotFound")}
              </p>
            )}

            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>

                <CardFooter className="my-4 flex w-full flex-wrap items-center justify-between max-md:flex-col max-md:items-start">
                  <div className="flex max-w-[60%] flex-wrap gap-2">
                    {project.badge &&
                      project.badge.map((badge, index) => (
                        <Badge key={index}>{badge}</Badge>
                      ))}
                  </div>

                  <div className="flex flex-wrap gap-4 max-md:mt-5">
                    {project.links.length > 0 && project.links[0].website && (
                      <a
                        href={project.links[0].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkStyle}
                      >
                        <span>
                          <Globe className="h-4 w-4" />
                        </span>
                        <span>{t("Projects.visitWebsite")}</span>
                      </a>
                    )}

                    {project.links.length > 0 && project.links[0].github && (
                      <a
                        href={project.links[0].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkStyle}
                      >
                        <span>
                          <ImGithub className="h-4 w-4" />
                        </span>
                        <span>{t("Projects.visitGithub")}</span>
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
