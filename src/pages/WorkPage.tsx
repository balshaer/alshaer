import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Footer from "@/components/common/Footer";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { PageTitle } from "@/helper";
import { PageTitlesData } from "@/data/PageTitlesData";

import { motion } from "framer-motion";
import Navbar from "@/components/common/Navbar";
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


const WorkPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = i18n;

  const direction = language === "ar" ? "rtl" : "ltr";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  return (
    <>
      <PageTitle title={PageTitlesData.work} />

      <div dir={direction} className="page">
        <Navbar />
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
                    <BreadcrumbLink className={styles.breadcrumbLink} href="/">
                      {t("Navbar.Home")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <div>
                    {language === "ar" ? (
                      <BreadcrumbSeparator
                        style={{ transform: "rotate(180deg)" }}
                      />
                    ) : (
                      <BreadcrumbSeparator />
                    )}
                  </div>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className={styles.breadcrumbLink}
                      href="/work"
                    >
                      {t("Navbar.Work")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <div className="works-cards flex flex-col gap-8 pb-16">
            {workData.map((experience) => (
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
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default WorkPage;
