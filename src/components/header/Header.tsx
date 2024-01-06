import { useTranslation } from 'react-i18next';


export default function Header() {
  const { t } = useTranslation();

const animate = "animate__animated animate__fadeIn animate__fast";
const animateFaster = "animate__animated animate__fadeIn animate__faster";

  return (
    <div className="bg-[--foreground]">
      <div className={animateFaster}>


<h1 className='text-[var(--headline)]'>{t('Header.Name')}</h1>

      </div>

      <div className={animate}>
      <p className="text-sm">{t("Header.Job")} </p>

      </div>

    </div>
  );
}
