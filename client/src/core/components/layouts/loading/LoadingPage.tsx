import { useTranslation } from "react-i18next";

export default function LoadingPage() {
  const { t } = useTranslation();

  return (
    <div className="h-[100vh] w-[100vw] z-50 bg-[var(--background)] flex justify-center items-center flex-col fixed inset-0 m-auto">
      <div className="text-[var(--headline)] text-base font-semibold flex items-center justify-center gap-4 h-full w-full ">
        <div className=" py-5 w-full flex items-center justify-center text-center flex-col ">
          <p className="w-full ps-2 pb-3">{t("Public.Loading")}</p>

          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
}
