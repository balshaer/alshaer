import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/system/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Header.css';
import 'animate.css';
import { useTranslation } from 'react-i18next';
import React from 'react';

const languageOptions = [
  { value: 'ar', label: 'عربي', direction: 'rtl', icon: <LanguageIcon /> },
  { value: 'en', label: 'English', direction: 'ltr', icon: <LanguageIcon /> },
];

function Header() {
  const { t, i18n } = useTranslation();

  const [isDarkMode, setIsDarkMode] = useState(true); 


  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return (
      languageOptions.find((option) => option.value === savedLanguage) || languageOptions[1]
    );
  });

  

  useEffect(() => {
    const theme = createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
      components: {
        MuiIconButton: {
          styleOverrides: {
            root: {
              color: isDarkMode ? 'white' : 'black',
            },
          },
        },
      },
    });

    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.classList.add(isDarkMode ? 'darkMode' : 'lightMode');
    document.body.classList.remove(isDarkMode ? 'lightMode' : 'darkMode');

    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage.value);
      document.body.dir = selectedLanguage.direction;
    }

    localStorage.setItem('selectedLanguage', selectedLanguage.value);
  }, [selectedLanguage, i18n]);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = languageOptions.find((option) => option.value === selectedValue);
    setSelectedLanguage(selectedOption || languageOptions[1]);
  };

  return (
    <ThemeProvider theme={createTheme({ palette: { mode: isDarkMode ? 'dark' : 'light' } })}>
      <header className="top-bar flexRowSpaceBetween animate__animated animate__fadeIn" dir="ltr">
        <aside>
          <Tooltip title={isDarkMode ? t('dark mode') : t('light mode')}>
            <div
              onClick={handleDarkModeToggle}
              style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              {isDarkMode ? (
                <DarkModeIcon className="animate__animated animate__fadeIn headerIcon" style={{ cursor: 'pointer' }} />
              ) : (
                <LightModeIcon className="animate__animated animate__fadeIn headerIcon" style={{ cursor: 'pointer' }} />
              )}
            </div>
          </Tooltip>
        </aside>
        <aside
          id="lang"
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Box sx={{ minWidth: 100 }}>
            <div>
              <Select
                labelId="language-select-label"
                onChange={handleLanguageChange}
                value={selectedLanguage ? selectedLanguage.value : ''}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: selectedLanguage?.direction === 'ltr' ? 'left' : 'right',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: selectedLanguage?.direction === 'ltr' ? 'left' : 'right',
                  },
                }}
                sx={{
                  minWidth: 'unset',
                  height: 36,
                  padding: '0 0 0 6px',
                  '& .MuiSelect-icon': {
                    display: 'none',
                  },
                  '&:before, &:after': {
                    content: 'none',
                  },
                  '& .headerLang': {
                    color: isDarkMode ? 'white' : 'black',
                  },
                }}
              >
                {languageOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    className="headerLang animate__animated animate__fadeIn"
                  >
                    <IconButton size="small" sx={{ mr: 1 }}>
                      {option.icon}
                    </IconButton>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </Box>
        </aside>
      </header>
    </ThemeProvider>
  );
}

export default Header;
