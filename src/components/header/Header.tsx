import { useTranslation } from 'react-i18next';


export default function Header() {
  const { t } = useTranslation();


  return (
    <div className="bg-[--foreground]">
      <div >


<h1 className='text-[var(--headline)] font-bold select-none'>{t('Header.Name')}</h1>

      </div>

      <div >
      <p className="  text-[var(--paragraph)]">{t("Header.Job")} </p>

      </div>

    </div>
  );
}
 