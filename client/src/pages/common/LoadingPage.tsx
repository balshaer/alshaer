import i18n from "@/i18n";
import { t } from "i18next";

export default function LoadingPage() {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div className="fixed inset-0 z-50 m-auto flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden bg-[var(--background)] font-semibold text-[var(--headline)]">
      <div
        dir={direction}
        className="flex flex-col items-center justify-center gap-4"
      >
        <span>{t("Public.Loading")}</span>
        <span className="loader"></span>
      </div>
    </div>
  );
}
