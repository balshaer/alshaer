import { useTranslation } from "react-i18next";
import ParagraphComponent from "../text/ParagraphComponent";

import { DrawerDialogDemo } from "./DrawerDialogDemo";


export default function Contact() {
  const { t } = useTranslation();
  const animate = "animate__animated animate__fadeIn animate__slow";

  return (
    <div className={`Contact ${animate}`}>




          <ParagraphComponent text={t("Contact.Note")} />

<DrawerDialogDemo/>
 
    </div>
  )
}
