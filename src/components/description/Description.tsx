import { useTranslation } from "react-i18next";
import ParagraphComponent from "../text/ParagraphComponent";

export default function Description() {

  const { t } = useTranslation();
  const animate = "animate__animated animate__fadeIn animate__slow";
  return (
    <div className={`Description ${animate}`}>
<ParagraphComponent text={t('Description.Description')}/>




    </div>
  )
}
