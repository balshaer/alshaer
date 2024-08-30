import i18n from "@/i18n";
import { t } from "i18next";

export default function LoadingPage() {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div className="h-[100vh] w-[100vw] fixed inset-0 m-auto overflow-hidden z-50 flex justify-center items-center flex-col text-[var(--headline)] bg-[var(--background)] font-semibold">
      <div
        dir={direction}
        className="flex justify-center items-center flex-col gap-4"
      >
        <span>{t("Public.Loading")}</span>
        <span className="loader"></span>
      </div>
    </div>
  );
}
