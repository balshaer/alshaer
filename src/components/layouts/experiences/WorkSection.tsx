import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import axios from "axios"; // Import axios
import { Button } from "@/components/ui/button";
import { endpoints } from "@/API/API";

interface WorkData {
  id: number;
  title: string;
  description: string;
  badge?: string[];
  links?: { website: string; github: string }[];
}

const WorkSection: React.FC = () => {
  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const [works, setWorks] = useState<WorkData[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get(endpoints.getAllWorks);
        setWorks(response.data);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchWorks();
  }, []);

  return (
    <div dir={direction} id="work" className="section w-full">
      <h1 className="section-title">{t("Experience.Title")}</h1>

      <div className="py-5">
        <div className="work-cards flex flex-col gap-8 pb-16">
          {works.length === 0 && (
            <p className="text-lg text-[var(--paragraph)] max-md:w-full max-md:max-w-none max-md:text-lg">
              {t("Experience.NotFound")}
            </p>
          )}

          {works.slice(0, 3).map(
            (
              work, // Limit to 3 works
            ) => (
              <Card key={work.id}>
                <CardHeader>
                  <CardTitle>{work.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription>{work.description}</CardDescription>
                </CardContent>

                <CardFooter className="my-4 flex w-full flex-wrap items-center justify-between max-md:flex-col max-md:items-start">
                  <div className="flex max-w-[60%] flex-wrap gap-2">
                    {work.badge &&
                      work.badge.map((badge, index) => (
                        <Badge key={index}>{badge}</Badge>
                      ))}
                  </div>

                 
                </CardFooter>
              </Card>
            ),
          )}
        </div>

        <Link to={"/work"}>
          <Button>{t("Public.SeeMore")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default WorkSection;
