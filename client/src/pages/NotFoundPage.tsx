import Navbar from "@/components/layouts/navbar/Navbar";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const NotFoundPage: FunctionComponent<Props> = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full bg-[var(--background)]">
      <PageTitle title={PageTitlesData.notFound} />

      <div className="container flex h-max min-h-[100vh] flex-col gap-6">
        <div className="hidden">
          <Navbar />
        </div>

        <div>
          <div className="grid h-screen place-content-center px-4">
            <div className="text-center">
              <h1 className="mt-6 text-2xl font-bold tracking-tight text-[var(--headline)] sm:text-4xl">
                {t("Errors.Pages.NotFound.Title")}
              </h1>
              <p className="mt-4 text-[var(--paragraph)]">
                {t("Errors.Pages.NotFound.Description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
