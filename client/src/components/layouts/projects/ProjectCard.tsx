import React from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "../../ui/badge";
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

interface ProjectCardProps {
  titleKey: string;
  descriptionKey: string;
  link: string;
  badgeText?: string[];
  visitWebsite: string;
  visitGithub: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  titleKey,
  descriptionKey,
  badgeText,
  visitWebsite,
  visitGithub,
}) => {
  const { t } = useTranslation();

  const styles = {
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd  hover:opacity-100",
  };

  const renderFooter = () =>
    badgeText && (
      <CardFooter className="my-4 flex w-full flex-wrap items-center justify-between max-md:flex-col max-md:items-start">
        <div className="flex max-w-[60%] flex-wrap gap-2">
          {badgeText.map((badge, index) => (
            <Badge key={index}>{badge}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 max-md:mt-5">
          {visitWebsite !== "#" && visitWebsite && (
            <a href={visitWebsite} target="_blank" className={styles.linkStyle}>
              <span>
                <Globe className="h-4 w-4" />
              </span>
              <span>{t("Projects.visitWebsite")}</span>
            </a>
          )}

          {visitGithub !== "#" && visitGithub && (
            <a href={visitGithub} target="_blank" className={styles.linkStyle}>
              <span>
                <ImGithub className="h-4 w-4" />
              </span>
              <span>{t("Projects.visitGithub")}</span>
            </a>
          )}
        </div>
      </CardFooter>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t(titleKey)}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>{t(descriptionKey)}</CardDescription>
      </CardContent>

      {renderFooter()}
    </Card>
  );
};

export default ProjectCard;
