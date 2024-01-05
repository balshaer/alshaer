import { useTranslation } from 'react-i18next';
import H1Component from '../text/H1Component';
import ParagraphComponent from '../text/ParagraphComponent';


export default function Header() {
  const { t } = useTranslation();

const animate = "animate__animated animate__fadeIn animate__fast";
const animateFaster = "animate__animated animate__fadeIn animate__faster";

  return (
    <div className="bg-[--foreground]">
      <div className={animateFaster}>

      <H1Component  text={t('Header.Name')} />
      </div>

      <div className={animate}>

      <ParagraphComponent text={t('Header.Job')} />
      </div>

    </div>
  );
}
