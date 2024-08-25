import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import i18n from "@/i18n";

interface ExperienceProps {}

const Experience: FunctionComponent<ExperienceProps> = () => {
  const { t } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section dir={direction} className="section">
      <h1 className="section-title">{t("Experience.Title")}</h1>
      <ExperienceCard />
    </section>
  );
};

export default Experience;
