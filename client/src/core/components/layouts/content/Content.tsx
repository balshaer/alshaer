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
        className="  flex items-start justify-start flex-col w-full gap-5 min-h-[75vh]  py-12 max-md:pb-0"
      >
        <div>
          <h1 className="title uppercase  text-[var(--headline)] text-2xl font-bold  flex flex-col gap-4 max-md:pt-20">
            <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight text-wrap span-title max-md:text-[26px] ">
              {t("Header.Title.Word_1")}{" "}
            </span>
            <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight text-wrap span-title max-md:text-[26px] ">
              {t("Header.Title.Word_2")}{" "}
            </span>
            <br />

            <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight text-wrap span-title max-md:text-[26px] ">
              {t("Header.Title.Word_3")}{" "}
            </span>
            <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight text-wrap span-title max-md:text-[26px] ">
              {t("Header.Title.Word_4")}{" "}
            </span>
            <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight text-wrap span-title max-md:text-[26px] ">
              {t("Header.Title.Word_5")}{" "}
            </span>
            <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight text-wrap span-title max-md:text-[26px] ">
              {t("Header.Title.Word_6")}{" "}
            </span>
            <span className="max-md:text-3xl max-w-[60%] max-md:max-w-none leading-tight text-wrap span-title max-md:text-[26px] ">
              {t("Header.Title.Word_7")}{" "}
            </span>
          </h1>
        </div>

        <div>
          <p className="text-[var(--paragraph)] text-[1rem] max-md:w-full max-md:max-w-none">
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
