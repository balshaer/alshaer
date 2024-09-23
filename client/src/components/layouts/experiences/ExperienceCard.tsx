import { experienceData } from "@/data/ExperienceData";
import { Badge } from "../../ui/badge";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ExperienceCard = () => {
  const { t } = useTranslation();

  return (
    <div className="cardsGroup">
      {experienceData.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              {t(item.jobTitle)}{" "}
              <span className="opacity-60">
                {""} {t("Public.At")} {""}
              </span>
              <a href={item.Link} target="_blank">
                {t(item.companyName)}
              </a>
            </CardTitle>
            <CardDescription>{t(item.jobDate)}</CardDescription>
          </CardHeader>

          <CardContent>
            <CardDescription>{t(item.jobDescription)}</CardDescription>
          </CardContent>
          <CardFooter>
            {item.skills.map((skill, i) => (
              <Badge key={i}>{skill}</Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ExperienceCard;
