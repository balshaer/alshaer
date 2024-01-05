import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSelectProps {}

const LanguageSelect: React.FC<LanguageSelectProps> = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      
      <select
        className='p-2 outline-none bg-[var(--background)] text-[var(--headline)] cursor-pointer'
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option className='p-2 text-[var(--headline)] cursor-pointer ' value="en">
     
     {t('LanguageSelect.English')}
        </option>
        {/* <option className='p-2 text-[var(--headline)] cursor-pointer ' value="ar">
        {t('LanguageSelect.Arabic')}

        </option> */}
      </select>
    </div>
  );
};

export default LanguageSelect;
