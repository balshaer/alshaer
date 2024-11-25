import { RandomizedTextEffect } from "@/components/ui/text-randomized";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const NotFoundPage: FunctionComponent<Props> = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full bg-[var(--background)]">
      <div className="container flex h-max min-h-[100vh] flex-col gap-6">
        <div>
          <div className="grid h-screen place-content-center px-4">
            <div className="flex flex-col text-center">
              <RandomizedTextEffect
                className="mt-6 text-2xl font-bold tracking-tight text-[var(--headline)] sm:text-4xl"
                text={t("Errors.Pages.NotFound.Title")}
              />

              <RandomizedTextEffect
                className="mt-4 text-[var(--paragraph)]"
                text={t("Errors.Pages.NotFound.Description")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
