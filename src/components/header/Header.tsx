import { useTranslation } from "react-i18next";
import { DrawerDialogDemo } from "../contact/DrawerDialogDemo";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="  flex items-start justify-center flex-col w-full gap-4 min-h-[100vh] pb-32">
      <div>
        <h1 className="text-[var(--headline)] text-5xl font-bold select-none flex flex-col gap-4">
          <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none">
            Software engineer, technical writer & open-source maintainer
          </span>
        </h1>
      </div>

      <div>
        <p className="text-[var(--paragraph)]  text-xl max-md:text-lg max-md:w-full max-w-[50%] max-md:max-w-none">
          {t("Header.Description")}
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-4 max-md:flex-col"
      >
        <div className="h-full flex items-center w-full">
          <DrawerDialogDemo />
        </div>
      </form>
    </div>
  );
}
