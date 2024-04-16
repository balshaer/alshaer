import TitleOfSection from "@/components/custom/TitleOfSection";
import Posts from "@/components/posts/Posts";
import i18n from "@/i18n";

import { useTranslation } from "react-i18next";

export default function Blog() {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const { t } = useTranslation();

  return (
    <div className="w-full section" dir={direction} id="blog">
      <div className="w-full">
        <TitleOfSection title={t("BlogSection.Title")} />
      </div>

      <div>
        <Posts />
      </div>
    </div>
  );
}
