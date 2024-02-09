import vercelIcon from "@/assets/images/vercel.svg";
import { t } from "i18next";

export default function FooterItems() {
  return (
    <div className="text-sm flex gap-2 text-[var(--paragraph)] max-md:flex-col max-md:items-center ">
      <div>
        <span className="text-sm">{t('Public.BuiltWith')}</span>
      </div>

      <div className="flex gap-2 h-full ">
        <a
          className="flex flex-row items-center justify-center gap-2 opacity-65 hoverd hover:opacity-100"
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

        <a
          className="flex flex-row items-center justify-center gap-2 opacity-65 hoverd hover:opacity-100"
          href="https://vercel.com/dashboard"
          target="_blank"
        >
          <span>Vercel</span>

          <img
            width="13"
            height="13"
            className="object-contain"
            src={vercelIcon}
            alt="react"
          />
        </a>
      </div>
    </div>
  );
}
