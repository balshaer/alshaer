import { Badge } from "../../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsData } from "@/data/projectsData";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProjectsCard: React.FC = () => {
  const { t } = useTranslation();
  const [showAll] = useState(false);
  const navigate = useNavigate();

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section className="section">
      <h1 className="section-title">{t("Projects.Title")}</h1>

      <div className="cardsGroup">
        {displayedProjects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              {/* Use titleKey for i18n translation */}
              <CardTitle>{t(project.titleKey)}</CardTitle>
            </CardHeader>

            <CardContent>
              {/* Use descriptionKey for i18n translation */}
              <CardDescription>{t(project.descriptionKey)}</CardDescription>
            </CardContent>

            <CardFooter className="my-4 flex w-full flex-wrap items-center justify-between max-md:flex-col max-md:items-start">
              <div className="flex max-w-[60%] flex-wrap gap-2 max-md:max-w-full">
                {project.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}

        {/* Show All Button */}
        {!showAll && projectsData.length > 3 && (
          <Button
            className="mb-10 w-max"
            variant={"default"}
            onClick={() => navigate("/projects")}
          >
            {t("Public.SeeMore")}
          </Button>
        )}
      </div>
    </section>
  );
};

export default ProjectsCard;
