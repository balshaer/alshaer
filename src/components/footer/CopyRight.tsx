import { t } from "i18next";

export default function CopyRight() {
  return (
    <div className="text-sm text-[var(--paragraph)] opacity-60">
      {t("Footer.CopyRight")}
    </div>
  );
}
