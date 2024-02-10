import { useTranslation } from "react-i18next";

export default function CopyRight() {
  const { t } = useTranslation();

  return (
    <div className="text-sm text-[var(--paragraph)] opacity-60">
      {t("Footer.CopyRight")}
    </div>
  );
}
