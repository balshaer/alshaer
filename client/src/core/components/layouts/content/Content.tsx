import { useTranslation } from "react-i18next";
import { DrawerDialogDemo } from "../contact/DrawerDialogDemo";
import i18n from "@/i18n";
import AnimatedComponent from "@/core/components/global/animations/AnimatedComponent";
import Contact from "../contact/Contact";
import ExperienceDescription from "../experienceDescription/ExperienceDescription";
import Projects from "@/modules/main/Projects";

export default function Content() {
  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <AnimatedComponent>
      <div
        dir={direction}
        className="  flex items-start justify-start flex-col w-full gap-5 min-h-[75vh]  py-20 max-md:pb-0"
      >
        <div>
          <h1 className="text-[var(--headline)] text-2xl font-bold  flex flex-col gap-4 max-md:pt-10">
            <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight text-wrap">
              {t("Header.Title")}
            </span>
          </h1>
        </div>

        <div>
          <p className="text-[var(--paragraph)]  text-lg max-md:text-lg max-md:w-full max-md:max-w-none">
            {t("Header.Description")}
            <DrawerDialogDemo />
          </p>
        </div>

        <Contact />
        <ExperienceDescription />
        <Projects />
      </div>
    </AnimatedComponent>
  );
}
