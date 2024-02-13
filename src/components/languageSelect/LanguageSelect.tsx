/* eslint-disable @typescript-eslint/no-explicit-any */
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
      label: t(`${i18n.language}`),
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
      color: "var(--button-text)",
    }),
  };

  useEffect(() => {
    i18n.changeLanguage(selectedOption.value);
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
