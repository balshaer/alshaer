import { useTranslation } from "react-i18next";

export default function CopyRight() {
  const { t } = useTranslation();

  return (
    <div className="text-sm uppercase text-[var(--footer-text)] opacity-90">
      {t("Footer.CopyRight")}
    </div>
  );
}
