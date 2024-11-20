
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
import ReusableCard from "@/components/custom/ReusableCard";
import { Github, Globe } from "lucide-react";
import Header from "@/components/website/Header";
import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";

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

const styles = {
  breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
  arrowIcon:
    "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
  linkStyle:
    "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
};

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
                  websiteLink={project.links.website}
                  githubLink={project.links.github}
                  t={t}
                  linkStyle={styles.linkStyle}
                  className="pb-4 pt-2"
                  dir={direction}
                >
                  <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
                    {project.skills.map((skill, index) => (
                      <Badge key={index}>{skill}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 max-md:mt-5">
                    {project.links.website && (
                      <a
                        href={project.links.website}
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

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkStyle}
                      >
                        <span>
                          <Github className="h-4 w-4" />
                        </span>
                        <span>{t("links.visitGithub")}</span>
                      </a>
                    )}
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
