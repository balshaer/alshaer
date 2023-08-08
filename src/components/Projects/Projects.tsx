import React from 'react';
import '../Title/Content.css';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import projectsData from './projects.json'; // Assuming the JSON file is in the same directory

export default function Projects() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const language = isArabic ? 'arabic' : 'english';

  return (
    <div>
      <div className='items'>
        {projectsData.map(project => (
          <li key={project.key} className='item'>
            {!isArabic && (
              <Tooltip placement='right' title={project.description}>
                <a
                  id='linkItem'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={project.link}
                >
                  {t(project.title)}
                </a>
              </Tooltip>
            )}
            {isArabic && (
              <a
                id='linkItem'
                target='_blank'
                rel='noopener noreferrer'
                href={project.link}
              >
                {t(project.title)}
              </a>
            )}
          </li>
        ))}
      </div>
    </div>
  );
}
