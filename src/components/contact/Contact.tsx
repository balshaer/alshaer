import { useTranslation } from "react-i18next";


import { DrawerDialogDemo } from "./DrawerDialogDemo";


export default function Contact() {
  const { t } = useTranslation();
  const animate = "animate__animated animate__fadeIn animate__slow";

  return (
    <div className={`Contact ${animate}`}>



<p className="text-sm text-[var(--paragraph)]">{t("Contact.Note")} </p>


<DrawerDialogDemo/>
 
    </div>
  )
}
