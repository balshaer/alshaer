import { useTranslation } from "react-i18next";
import TitleOfSection from "@/core/components/ui/TitleOfSection";
import AnimatedComponent from "@/core/components/global/animations/AnimatedComponent";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <AnimatedComponent>
      <section className="my-8">
        <TitleOfSection title={t("About.Title")} />

        <p className="text-[var(--paragraph)] text-lg max-md:text-sm max-md:w-full max-w-[50%] max-md:max-w-none">
          {t("About.Description1")}
          <a
            className=" text-[var(--link-color)] hover:underline"
            href="https://www.alazhar.edu.ps/"
            rel="noreferrer noopener"
            target="_blank"
          >
            {t("About.CollegeName")}
          </a>
        </p>

        <p className="text-[var(--paragraph)] text-lg max-md:text-sm max-md:w-full max-w-[50%] max-md:max-w-none">
          {t("About.Description2")}
          {t("About.Description3")}

          <a
            className=" text-[var(--link-color)] hover:underline"
            href="mailto:alshaer.contact@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            {t("About.Email")}
          </a>
        </p>
      </section>
    </AnimatedComponent>
  );
}
