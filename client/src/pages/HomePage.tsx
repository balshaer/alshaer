import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";

import { projectsData } from "@/data/projectsData";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import i18n from "@/i18n";
import { scrollToTop } from "@/helper";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";
import ReusableCard from "@/components/common/ReusableCard";

export const workData = [
  {
    id: "frontend-developer-sustainable-star",
    title: "WorkExperience.FrontendDeveloperSustainableStar.Title",
    company: "Sustainable Star LLC",
    date: "WorkExperience.FrontendDeveloperSustainableStar.Date",
    description: "WorkExperience.FrontendDeveloperSustainableStar.Description",
    skills: [
      "React js",
      "Typescript",
      "Tailwind CSS",
      "Github",
      "Git",
      "RESTful APIs",
    ],
  },
  {
    id: "frontend-developer-ptit",
    title: "WorkExperience.FrontendDeveloperPTIT.Title",
    company: "PTIT",
    date: "WorkExperience.FrontendDeveloperPTIT.Date",
    description: "WorkExperience.FrontendDeveloperPTIT.Description",
    skills: ["React js", "Javascript", "Tailwind CSS", "Github", "Git"],
  },
  {
    id: "software-engineer-intern-gedco",
    title: "WorkExperience.SoftwareEngineerGEDCO.Title",
    company: "GEDCO",
    date: "WorkExperience.SoftwareEngineerGEDCO.Date",
    description: "WorkExperience.SoftwareEngineerGEDCO.Description",
    skills: ["PHP", "MySQL", "Bootstrap"],
  },
];

export default function HomePage() {
  const { t } = useTranslation();
  const [showAll] = useState(false);
  const navigate = useNavigate();
  const { language } = i18n;
  const direction = language === "ar" ? "rtl" : "ltr";
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  function navigateTo() {
    navigate("/projects");
    scrollToTop();
  }

  const displayedWorkData = showAll ? workData : workData.slice(0, 3);

  return (
    <>
      <PageTitle title={PageTitlesData.main} />
      <div className="page">
        <Navbar />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <section dir={direction} className="section">
            <h1 className="section-title">{t("WorkExperience.Title")}</h1>

            <div className="cardsGroup">
              {displayedWorkData.map((experience) => (
                <ReusableCard
                  key={experience.id}
                  id={experience.id}
                  title={t(experience.title)}
                  date={t(experience.date)}
                  description={t(experience.description)}
                  skills={experience.skills}
                  className="pb-4 pt-2"
                  dir={direction}
                >
                  <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
                    {experience.skills.map((skill, index) => (
                      <Badge key={index}>{skill}</Badge>
                    ))}
                  </div>
                </ReusableCard>
              ))}

              {!showAll && workData.length >= 3 && (
                <Button
                  className="w-max"
                  variant={"default"}
                  onClick={navigateTo}
                >
                  {t("Public.SeeMore")}
                </Button>
              )}
            </div>
          </section>
          <section dir={direction} className="section">
            <h1 className="section-title">{t("Projects.Title")}</h1>

            <div className="cardsGroup">
              {displayedProjects.map((project) => (
                <ReusableCard
                  key={project.id}
                  id={project.id}
                  title={t(project.titleKey)}
                  description={t(project.descriptionKey)}
                  skills={project.skills}
                  dir={direction}
                >
                  <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
                    {project.skills.map((skill, index) => (
                      <Badge key={index}>{skill}</Badge>
                    ))}
                  </div>
                </ReusableCard>
              ))}

              {!showAll && projectsData.length > 3 && (
                <Button
                  className="mb-10 w-max"
                  variant={"default"}
                  onClick={navigateTo}
                >
                  {t("Public.SeeMore")}
                </Button>
              )}
            </div>
          </section>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
