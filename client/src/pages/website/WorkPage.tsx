import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ReusableCard from "@/components/custom/ReusableCard";
import Footer from "@/components/website/Footer";
import Navbar from "@/components/website/Navbar";
import axios from "axios";
import { endpoints } from "@/API/API";
import SEO from "@/SEO";

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

  const [work, setWork] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(endpoints.getUnArchivedWorks)
      .then((res) => {
        console.log(res.data);
        setWork(res.data || []);
      })
      .catch((error) => console.error("Failed to fetch work data:", error));
  }, []);

  return (
    <>

<SEO
        title="Work Experience - Baraa Alshaer"
        description="Discover Baraa Alshaer's professional journey in web development, including roles, projects, and achievements in full-stack development and software engineering."
        keywords={["Baraa Alshaer", "Work Experience", "Full Stack Developer", "Software Engineer", "براء الشاعر خبرة عمل"]}
      />


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

          <div className="works-cards relative flex min-h-[60vh] flex-col gap-8 pb-16">
            {work.length > 0 ? (
              work.map((experience) => (
                <ReusableCard
                  key={experience._id}
                  id={experience._id}
                  title={experience.title}
                  date={`${new Date(experience.date[0].startDate).toLocaleDateString()} - ${new Date(experience.date[0].endDate).toLocaleDateString()}`}
                  description={experience.description}
                  className="pb-4 pt-2"
                  dir={direction}
                >
                  {/* Ensure badges array is properly rendered */}
                  <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
                    {experience.badge && experience.badge.length > 0 ? (
                      experience.badge.map((skill: string, index: number) => (
                        <Badge key={index}>{skill}</Badge>
                      ))
                    ) : (
                      <span>{t("WorkExperience.NoSkills")}</span>
                    )}
                  </div>
                </ReusableCard>
              ))
            ) : (
              <h1 className="absolute inset-0 m-auto h-max text-center text-base text-[var(--headline)] opacity-70">
                <span>No experience add yet</span>
              </h1>
            )}
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default WorkPage;
