import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ReusableCard from "@/components/custom/ReusableCard";
import { Github, Globe } from 'lucide-react';
import Header from "@/components/website/Header";
import SEO from "@/components/featuers/SEO";

const workData = [
  {
    id: "frontend-developer-sustainable-star",
    title: "WorkExperience.FrontendDeveloperSustainableStar.Title",
    company: "Sustainable Star LLC",
    date: "WorkExperience.FrontendDeveloperSustainableStar.Date",
    description: "WorkExperience.FrontendDeveloperSustainableStar.Description",
    skills: ["React js", "Typescript", "Tailwind CSS", "Github", "Git", "RESTful APIs"],
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

const projectsData = [
  {
    id: "samtax",
    titleKey: "projects.samtax.title",
    descriptionKey: "projects.samtax.description",
    skills: ["React", "Tailwind CSS", "Shadcn UI"],
    links: {
      website: "https://sam-tax.com",
    },
  },

  {
    id: "gradients-css",
    titleKey: "projects.gradientsCss.title",
    descriptionKey: "projects.gradientsCss.description",
    skills: [
      "React JS",
      "Typescript",
      "Tailwind CSS",
      "Github",
      "Git",
      "RESTful APIs",
    ],
    links: {
      website: "https://gradientscss.vercel.app",
      github: "https://github.com/balshaer/gradients-css",
    },
  },
  {
    id: "raouf-zadi",
    titleKey: "projects.raoufzadi.title",
    descriptionKey: "projects.raoufzadi.description",
    skills: ["React JS", "Typescript", "Tailwind CSS", "Github", "Git"],
    links: {
      website: "https://raoufzadi.vercel.app",
    },
  },

  {
    id: "naj-training-center",
    titleKey: "projects.najTrainingCenter.title",
    descriptionKey: "projects.najTrainingCenter.description",
    skills: ["React JS", "Javascript", "MIUI"],
    links: {
      website: "https://naj.shamilapp.com/",
    },
  },
  {
    id: "rove",
    titleKey: "projects.rove.title",
    descriptionKey: "projects.rove.description",
    skills: ["React", "Tailwind CSS", "Laravel", "MYSQL"],
    links: {
      github: "https://github.com/balshaer/rove",
    },
  },
  {
    id: "sustainable-star",
    titleKey: "projects.sustainableStar.title",
    descriptionKey: "projects.sustainableStar.description",
    skills: ["React", "Tailwind CSS", "Material UI"],
    links: {
      website: "https://sustainablestar.com.sa/",
    },
  },
  {
    id: "bookstore-api",
    titleKey: "projects.bookstoreApi.title",
    descriptionKey: "projects.bookstoreApi.description",
    skills: ["Node JS", "Express JS", "Mongoose DB"],
    links: {
      github: "https://github.com/balshaer/bookstore-api",
    },
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
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const displayedProjects = projectsData.slice(0, 3);
  const displayedWorkExperiences = workData.slice(0, 3);

  function navigateTo(path: string): void {
    navigate(path);
  }

  const isValidLink = (link: any | undefined): boolean =>
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
                  {experience.skills && experience.skills.length > 0 ? (
                    experience.skills.map((skill, index) => (
                      <Badge key={index}>{skill}</Badge>
                    ))
                  ) : (
                    <span>{t("WorkExperience.NoSkills")}</span>
                  )}
                </div>
              </ReusableCard>
            ))}

            {workData.length > 3 && (
              <Button
                className="w-max"
                variant="default"
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

            {projectsData.length > 3 && (
              <Button
                className="mb-10 w-max"
                variant="default"
                onClick={() => navigateTo("/projects")}
              >
                {t("Public.SeeMore")}
              </Button>
            )}
          </div>
        </section>
      </motion.div>
    </>
  );
}

