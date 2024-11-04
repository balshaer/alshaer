import { useTranslation } from "react-i18next";

import i18n from "@/i18n";
import { ContactForm } from "./ContactForm";
import ContactSection from "./ContactSection";

export default function Header() {
  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div className="header" dir={direction}>
      <div className="header-content">
        <h1 className="header-title">{t("Header.Title")}</h1>
        <p className="subtitle">{t("Header.Subtitle")}</p>
        <p className={"description"}>{t("Header.Description1")}</p>
        <p className={"description"}>{t("Header.Description2")}</p>
        <p className={"description"}>{t("Header.Description3")}</p>
        <ContactForm />
      </div>
      <ContactSection />
    </div>
  );
}
