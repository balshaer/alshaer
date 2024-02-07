/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

interface CustomStyles {
  control: (provided: React.CSSProperties, state: any) => React.CSSProperties;
  option: (provided: React.CSSProperties, state: any) => React.CSSProperties;
  singleValue: (provided: React.CSSProperties) => React.CSSProperties;
}

const options = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
];

const customStyles: CustomStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid var(--button)",
    borderRadius: "4px",
    backgroundColor: "var(--button)",
    color: "var(--button-text)",
    "&:hover": {
      borderColor: "var(--button-hover)",
      backgroundColor: "var(--button-hover)",
      color: "var(--button-text)",
    },
    "&:active": {
      color: "var(--button-text)",
    },
    "&:focus": {
      color: "var(--button-text)",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--button-hover)" : "transparent",
    color: state.isFocused ? "var(--button-text)" : "inherit",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "inherit",
  }),
};

const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  }>({
    value: i18n.language,
    label: t(
      `LanguageSelect.${i18n.language === "en" ? "English" : "العربية"}`
    ),
  });

  const changeLanguage = (option: any) => {
    i18n.changeLanguage(option.value);
    setSelectedOption(option);
  };

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={changeLanguage}
        options={options}
        styles={customStyles}
        isSearchable={false}
      />
    </div>
  );
};

export default LanguageSelect;
