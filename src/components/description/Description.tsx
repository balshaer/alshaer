import { useTranslation } from "react-i18next";

export default function Description() {

  const { t } = useTranslation();
  return (
    <div className={`Description }`}>

<p className=" text-[var(--paragraph)]">{t("Description.Description")} </p>



    </div>
  )
}
 