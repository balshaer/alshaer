import { useTranslation } from "react-i18next";
import { direction } from "../languageSelect/Direction";

const FooterItems = () => {
  const { t } = useTranslation();

  return (
    <div
      dir={direction}
      className="text-sm flex gap-2 text-[var(--paragraph)] max-md:flex-col max-md:items-center"
    >
      <div>
        <span className="text-sm">{t("Public.BuiltWith")}</span>
      </div>

      <div className="flex gap-2 h-full">
        <a
          className="flex flex-row items-center justify-center gap-2 hoverd hover:opacity-100"
          href="https://react.dev/"
          target="_blank"
        >
          <span>React</span>
          <img
            width="16"
            height="16"
            className="object-contain"
            src="https://img.icons8.com/officel/16/react.png"
            alt="react"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterItems;
