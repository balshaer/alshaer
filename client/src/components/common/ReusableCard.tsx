import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Globe, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface ReusableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  title?: string;
  date?: string;
  description?: string;
  skills?: string[];
  websiteLink?: string;
  githubLink?: string;
  t?: (key: string) => string;
  linkStyle?: string;
}

const ReusableCard = React.forwardRef<HTMLDivElement, ReusableCardProps>(
  (
    {
      id,
      title,
      date,
      description,
      skills = [],
      websiteLink,
      githubLink,
      t = (key: string) => key,
      linkStyle = "",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Card
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        ref={ref}
        className={cn("pb-4 pt-2", className)}
        {...props}
      >
        <CardHeader className="flex items-center justify-between py-2 max-md:flex-col max-md:items-start">
          {title && (
            <CardTitle className="text-base font-semibold leading-6 tracking-tight text-[var(--headline)]">
              {title}
            </CardTitle>
          )}
          {date && (
            <CardDescription className="text-sm text-[var(--paragraph)] max-md:mb-0 max-md:mt-1">
              {date}
            </CardDescription>
          )}
        </CardHeader>

        {description && (
          <CardContent>
            <CardDescription className="mb-6 mt-0 max-w-lg py-2 pb-4 text-sm text-[var(--paragraph)]">
              {description}
            </CardDescription>
          </CardContent>
        )}

        <CardFooter className="mt-4 flex w-full flex-wrap items-center justify-between max-md:flex-col max-md:items-start">
          {skills.length > 0 && (
            <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 max-md:mt-5">
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("flex items-center gap-1", linkStyle)}
              >
                <Globe className="h-4 w-4" />
                <span>{t("links.visitWebsite")}</span>
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("flex items-center gap-1", linkStyle)}
              >
                <Github className="h-4 w-4" />
                <span>{t("links.visitGithub")}</span>
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    );
  },
);

ReusableCard.displayName = "ReusableCard";

export default ReusableCard;
