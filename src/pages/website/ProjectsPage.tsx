import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Globe, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ReusableCard from "@/components/custom/ReusableCard";
import { projectsData } from "@/data/ProjectsData";
import SEO from "@/components/featuers/SEO";

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  const isValidLink = (link: string | undefined) => {
    return link && link.trim() !== "" && link !== "#";
  };

  return (
    <>
      <SEO
        title="Projects - Baraa Alshaer"
        description="Explore the portfolio of web development projects by Baraa Alshaer, showcasing expertise in full-stack development, responsive design, and innovative solutions."
        keywords={[
          "Baraa Alshaer",
          "Web Projects",
          "Full Stack Development",
          "Portfolio",
          "براء الشاعر مشاريع",
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="projectCards flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0"
      >
        <div className="header">
          <h1 className="header-title">{t("Projects.Title")}</h1>
          <p className="description max-w-[100%]">
            {t("Projects.Description")}
          </p>
          <div className="py-5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link to={"/"}>
                    <BreadcrumbLink className={styles.breadcrumbLink}>
                      {t("Navbar.Home")}
                    </BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <div>
                  {i18n.language === "ar" ? (
                    <BreadcrumbSeparator
                      style={{ transform: "rotate(180deg)" }}
                    />
                  ) : (
                    <BreadcrumbSeparator />
                  )}
                </div>
                <BreadcrumbItem>
                  <Link to={"/projects"}>
                    <BreadcrumbLink className={styles.breadcrumbLink}>
                      {t("Navbar.Projects")}
                    </BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="projects-cards flex flex-col gap-8 pb-16">
          {projectsData.map((project) => (
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
                {isValidLink(project.links.website) && (
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

                {isValidLink(project.links.github) && (
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
        </div>
      </motion.div>
    </>
  );
}
