import { useTranslation } from "react-i18next";

export default function Description() {

  const { t } = useTranslation();
  const animate = "animate__animated animate__fadeIn animate__slow";
  return (
    <div className={`Description ${animate}`}>

<p className="text-sm text-[var(--paragraph)]">{t("Description.Description")} </p>



    </div>
  )
}
 