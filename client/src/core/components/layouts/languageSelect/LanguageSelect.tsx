import React, { useState, useEffect } from "react";
import Select, { ActionMeta, StylesConfig } from "react-select";
import { useTranslation } from "react-i18next";

interface Option {
  value: string;
  label: string;
}

interface CustomStyles {
  control: (provided: React.CSSProperties) => React.CSSProperties;
  option: (provided: React.CSSProperties, state: any) => React.CSSProperties;
  singleValue: (provided: React.CSSProperties) => React.CSSProperties;
}

const LanguageSelect: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [selectedOption, setSelectedOption] = useState<Option>(() => {
    return {
      value: i18n.language,
      label:
        i18n.language === "en-US"
          ? "English"
          : i18n.language === "ar"
          ? "العربية"
          : "English",
    };
  });

  const changeLanguage = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => {
    if (actionMeta.action === "select-option") {
      const option = newValue as Option;
      setSelectedOption(option);
    }
  };

  const options: Option[] = [
    { value: "en", label: t("Navbar.LanguageSelector.en") },
    { value: "ar", label: t("Navbar.LanguageSelector.ar") },
  ];

  const customStyles: CustomStyles = {
    control: (provided) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "var(--button-hover)" : "transparent",
      color: state.isFocused ? "#fff" : "#000",
      cursor: "pointer",
      transition: "all 0.1s ease 0s",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--button-text)",
    }),
  };

  useEffect(() => {
    i18n.changeLanguage(selectedOption.value);

    if (selectedOption.value === "en") {
      document.body.style.fontFamily = "'Jura', sans-serif";
    } else if (selectedOption.value === "ar") {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    }
  }, [selectedOption.value, i18n]);

  return (
    <div className="select">
      <Select
        defaultValue={selectedOption}
        onChange={changeLanguage}
        options={options}
        styles={customStyles as unknown as StylesConfig}
        isSearchable={false}
      />
    </div>
  );
};

export default LanguageSelect;
