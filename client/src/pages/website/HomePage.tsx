import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
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
import axios from "axios";
import { endpoints } from "@/API/API";
import SEO from "@/SEO";

interface Project {
  _id: string;
  title: string;
  description: string;
  badge: string[];
  links?: any;
}

interface WorkExperience {
  _id: string;
  title: string;
  description: string;
  badge: string[];
  date: {
    startDate: string;
    endDate: string;
  }[];
}

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

  const [projects, setProjects] = useState<Project[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);

  useEffect(() => {
    axios
      .get<Project[]>(endpoints.getUnArchivedProjects)
      .then((res) => setProjects(res.data || []))
      .catch((error) => console.error("Failed to fetch projects:", error));

    axios
      .get<WorkExperience[]>(endpoints.getUnArchivedWorks)
      .then((res) => setWorkExperiences(res.data || []))
      .catch((error) =>
        console.error("Failed to fetch work experiences:", error),
      );
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const displayedWorkExperiences = showAll
    ? workExperiences
    : workExperiences.slice(0, 3);

  function navigateTo(path: string): void {
    navigate(path);
    scrollToTop();
  }

  const isValidLink = (link: any): boolean =>
    link && link.trim() !== "" && link !== "#";

  return (
    <>
      <SEO
        title="Baraa Alshaer - Full Stack Developer"
        description="I am a Full-Stack Developer from Palestine. With a deep passion for backend, I specialize in building seamless and efficient web applications across both the front-end and back-end."
        keywords={[
          "Baraa Alshaer",
          "Full Stack Developer",
          "Web Development",
          "Palestine",
          "براء الشاعر",
        ]}
      />
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
              {displayedWorkExperiences.map((experience) => (
                <ReusableCard
                  key={experience._id}
                  id={experience._id}
                  title={experience.title}
                  date={`${new Date(experience.date[0].startDate).toLocaleDateString()} - ${new Date(experience.date[0].endDate).toLocaleDateString()}`}
                  description={experience.description}
                  skills={experience.badge}
                  className="pb-4 pt-2"
                  dir={direction}
                >
                  <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
                    {experience.badge && experience.badge.length > 0 ? (
                      experience.badge.map((skill, index) => (
                        <Badge key={index}>{skill}</Badge>
                      ))
                    ) : (
                      <span>{t("WorkExperience.NoSkills")}</span>
                    )}
                  </div>
                </ReusableCard>
              ))}

              {!showAll && workExperiences.length > 3 && (
                <Button
                  className="w-max"
                  variant={"default"}
                  onClick={() => navigateTo("/work")}
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
                  key={project._id}
                  id={project._id}
                  title={project.title || "Untitled Project"}
                  description={
                    project.description || "No description available"
                  }
                  skills={project.badge}
                  websiteLink={project.links?.[0]?.website || ""}
                  githubLink={project.links?.[0]?.github || ""}
                  t={t}
                  linkStyle={styles.linkStyle}
                  className="pb-4 pt-2"
                  dir={direction}
                >
                  <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
                    {project.badge.map((skill, index) => (
                      <Badge key={index}>{skill}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 max-md:mt-5">
                    {isValidLink(project.links?.[0]?.website) && (
                      <a
                        href={project.links[0].website}
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

                    {isValidLink(project.links?.[0]?.github) && (
                      <a
                        href={project.links[0].github}
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

              {!showAll && projects.length > 3 && (
                <Button
                  className="mb-10 w-max"
                  variant={"default"}
                  onClick={() => navigateTo("/projects")}
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
