/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import Select, { ActionMeta, StylesConfig } from "react-select";

interface Option {
  value: string;
  label: string;
}

interface CustomStyles {
  control: (provided: React.CSSProperties) => React.CSSProperties;
  option: (provided: React.CSSProperties, state: any) => React.CSSProperties;
  singleValue: (provided: React.CSSProperties) => React.CSSProperties;
}

interface ProjectSelectProps {
  options: Option[];
  defaultValue: Option;
  onSelect: (value: Option) => void;
}

const ProjectSelect: React.FC<ProjectSelectProps> = ({
  options,
  defaultValue,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option>(defaultValue);

  const handleSelect = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
    if (actionMeta.action === "select-option") {
      const option = newValue as Option;
      setSelectedOption(option);
      onSelect(option);
    }
  };

  const customStyles: CustomStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid var(--button)",
      width: "150px",
      cursor: "pointer",
      borderRadius: "4px",
      backgroundColor: "var(--button)",
      color: "var(--button-text)",
      "&:hover": {
        borderColor: "var(--button-hover)",
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
    onSelect(selectedOption);
  }, [selectedOption, onSelect]);

  return (
    <div className="custom-select">
      <Select
        defaultValue={defaultValue}
        onChange={handleSelect}
        options={options}
        styles={customStyles as unknown as StylesConfig}
        isSearchable={false}
      />
    </div>
  );
};

export default ProjectSelect;
