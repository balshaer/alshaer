import React from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/core/components/ui/badge";

interface ProjectCardProps {
  titleKey: string;
  descriptionKey: string;
  link: string;
  badgeText?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  titleKey,
  descriptionKey,
  link,
  badgeText,
}) => {
  const { t } = useTranslation();

  const renderBadges = () =>
    badgeText && (
      <div className="flex gap-2 my-2 flex-wrap">
        {badgeText.map((badge, index) => (
          <Badge
            key={index}
            className="cursor-text bg-[var(--badge-color)] text-[var(--badge-text)]"
          >
            {badge}
          </Badge>
        ))}
      </div>
    );

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="h-[150px] text-[1rem] rounded-lg bg-[var(--card-background)]  cursor-pointer">
        <div className="flex p-4 gap-4 items-start justify-start h-full w-full flex-col">
          <div className="flex items-center h-full justify-start gap-4">
            <div className="flex gap-1  flex-col">
              <span className="text-[var(--headline)] font-bold">
                {t(titleKey)}
              </span>
              <span className="text-[var(--paragraph)]">
                {t(descriptionKey)}
              </span>
              {renderBadges()}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
