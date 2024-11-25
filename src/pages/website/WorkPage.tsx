import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import ReusableCard from "@/components/custom/ReusableCard";
import { workData } from "@/data/WorkData";
import SEO from "@/components/featuers/SEO";

export default function WorkPage() {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  return (
    <>
      <SEO
        title="Work Experience - Baraa Alshaer"
        description="Discover Baraa Alshaer's professional journey in web development, including roles, projects, and achievements in full-stack development and software engineering."
        keywords={[
          "Baraa Alshaer",
          "Work Experience",
          "Full Stack Developer",
          "Software Engineer",
          "براء الشاعر خبرة عمل",
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 0.5 }}
        className="projectCards flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0"
      >
        <div className="header">
          <h1 className="header-title">{t("WorkExperience.Title")}</h1>
          <p className="description max-w-[100%]">
            {t("WorkExperience.Description")}
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
                  <Link to={"/work"}>
                    <BreadcrumbLink className={styles.breadcrumbLink}>
                      {t("Navbar.Work")}
                    </BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="works-cards relative flex min-h-[60vh] flex-col gap-8 pb-16">
          {workData.length > 0 ? (
            workData.map((experience) => (
              <ReusableCard
                key={experience.id}
                id={experience.id}
                title={t(experience.title)}
                date={t(experience.date)}
                description={t(experience.description)}
                className="pb-4 pt-2"
                skills={experience.skills}
                dir={direction}
              >
                {experience.skills && experience.skills.length > 0 && (
                  <div className="mt-2 text-sm text-[var(--paragraph)]">
                    <strong>{t("WorkExperience.Skills")}:</strong>{" "}
                    {experience.skills.join(", ")}
                  </div>
                )}
              </ReusableCard>
            ))
          ) : (
            <h1 className="absolute inset-0 m-auto h-max text-center text-base text-[var(--headline)] opacity-70">
              <span>{t("WorkExperience.NoExperience")}</span>
            </h1>
          )}
        </div>
      </motion.div>
    </>
  );
}
