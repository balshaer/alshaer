import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/layouts/footer/Footer";
import React from "react";
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
import Navbar from "@/components/layouts/navbar/Navbar";
import { projectsData } from "@/data/projectsData";

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = i18n;

  const direction = language === "ar" ? "rtl" : "ltr";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  return (
    <>
      <div dir={direction} className="page">
        <Navbar />
        <div className="projectCards flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0">
          <div className="header">
            <h1 className="header-title">{t("Projects.Title")}</h1>
            <p className="description max-w-[100%]">
              {t("Projects.Description")}
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
                    {language === "ar" ? (
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
            {projectsData.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{t(project.titleKey)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription>{t(project.descriptionKey)}</CardDescription>
                </CardContent>

                <CardFooter className="my-4 flex w-full flex-wrap items-center justify-between max-md:flex-col max-md:items-start">
                  <div className="flex max-w-[60%] flex-wrap gap-2 max-md:max-w-full">
                    {project.skills.map((skill, index) => (
                      <Badge key={index}>{skill}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 max-md:mt-5">
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkStyle}
                      >
                        <span>
                          <Globe className="h-4 w-4" />
                        </span>
                        <span>{t("links.visitWebsite")}</span>
                      </a>
                    )}

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkStyle}
                      >
                        <span>
                          <ImGithub className="h-4 w-4" />
                        </span>
                        <span>{t("links.visitGithub")}</span>
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
    </>
  );
};

export default ProjectsPage;