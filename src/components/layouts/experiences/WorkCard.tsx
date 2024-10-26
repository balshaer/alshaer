import { Badge } from "../../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { workData } from "@/data/workData";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WorkCard: React.FC = () => {
  const { t } = useTranslation();
  const [showAll] = useState(false);
  const navigate = useNavigate();

  const displayedWorkData = showAll ? workData : workData.slice(0, 3);

  return (
    <section className="section">
      <h1 className="section-title">{t("WorkExperience.Title")}</h1>

      <div className="cardsGroup">
        {displayedWorkData.map((experience) => (
          <Card key={experience.id}>
            <CardHeader className="flex-wrap">
              <CardTitle>{t(experience.title)}</CardTitle>
              <CardDescription>{t(experience.date)}</CardDescription>
            </CardHeader>

            <CardContent>
              <CardDescription>{t(experience.description)}</CardDescription>
            </CardContent>

            <CardFooter className="my-4 flex w-full flex-wrap items-center justify-between max-md:flex-col max-md:items-start">
              <div className="flex max-w-[60%] flex-wrap gap-2 max-md:max-w-full">
                {experience.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}

        {!showAll && workData.length >= 3 && (
          <Button
            className="w-max"
            variant={"default"}
            onClick={() => navigate("/work")}
          >
            {t("Public.SeeMore")}
          </Button>
        )}
      </div>
    </section>
  );
};

export default WorkCard;
