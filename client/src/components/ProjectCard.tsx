import React from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
import { Globe } from "lucide-react";

import { ImGithub } from "react-icons/im";

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
      <div className="flex  my-4 flex-wrap justify-between items-center w-full max-md:flex-col max-md:items-start ">
        <div className="flex gap-2  flex-wrap max-w-[60%] ">
          {badgeText.map((badge, index) => (
            <Badge key={index} className={"badge"}>
              {badge}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap max-md:mt-5">
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
      </div>
    );

  return (
    <div className={"card"}>
      <h1 className="title">{t(titleKey)}</h1>
      <p className="py-3 description">{t(descriptionKey)}</p>
      {renderFooter()}
    </div>
  );
};

export default ProjectCard;
