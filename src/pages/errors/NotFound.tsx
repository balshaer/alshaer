import NotFoundImage from "@/assets/images/404.png";
import { ScrollArea } from "@/components/ui/scroll-area";

import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const NotFound: FunctionComponent<Props> = () => {
  const { t } = useTranslation();

  return (
    <ScrollArea className="h-full w-full ">
      <div className="container h-max min-h-[100vh] max-w-7xl flex flex-col gap-[1.5rem]   ">
        <div>
          <div className="grid h-screen place-content-center bg-[var(--background)] px-4">
            <div className="text-center">
              <h1 className="mt-6 text-2xl font-bold tracking-tight text-[var(--headline)] sm:text-4xl">
                {t("Errors.Pages.NotFound.Title")}
              </h1>
              <p className="mt-4 text-[var(--paragraph)]">
                {t("Errors.Pages.NotFound.Description")}
              </p>
            </div>

            <img src={NotFoundImage} alt="NotFound" />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default NotFound;
