import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Link } from "react-router-dom";
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
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  _id: string;
  title: string;
  description: string;
  links: {
    website: string;
    github: string;
  }[];
  badge?: string[];
  order: number;
}

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(endpoints.getUnArchivedProjects);
        const sortedProjects = response.data.sort(
          (a: ProjectCardProps, b: ProjectCardProps) => a.order - b.order,
        );
        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)]",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 hoverd text-sm text-[var(--headline)] opacity-70 hover:opacity-100",
  };

  return (
    <div dir={direction} id="projects" className="section w-full">
      <h1 className="section-title">{t("Projects.ProjectsTitle")}</h1>

      <div className="py-5">
        <div className="projects-cards flex flex-col gap-8 pb-16">
          {projects.length === 0 && (
            <p className="text-lg text-[var(--paragraph)] max-md:w-full max-md:max-w-none max-md:text-lg">
              {t("Projects.NotFound")}
            </p>
          )}

          {projects.slice(0, 3).map(
            (
              project, // Limit to 3 projects
            ) => (
              <Card key={project._id}>
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
                        <span>{t("links.visitWebsite")}</span>
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
                        <span>{t("links.visitGithub")}</span>
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ),
          )}
        </div>

        <Link to={"/projects"}>
          <Button>{t("Public.SeeMore")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
