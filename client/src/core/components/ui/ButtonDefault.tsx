import React from "react";
import { ButtonHTMLAttributes } from "react";
import { Button } from "@/core/components/ui/button";
import { IconType } from "react-icons";

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isSubmit?: boolean;
  icon?: IconType;
  iconPosition?: "left" | "right";
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  text,
  isSubmit = false,
  icon: Icon,
  iconPosition = "left",
  ...rest
}) => {
  const renderIcon = () => {
    if (Icon) {
      return <Icon className="mr-2" />;
    }
    return null;
  };

  if (isSubmit) {
    return (
      <button
        {...rest}
        type="submit"
        className="hover:bg-[var(--button-hover)] gap-2 flex items-center justify-center bg-[var(--button)] text-[var(--button-text)] rounded-md cursor-pointer px-6 py-3 transition duration-100 transform"
      >
        {iconPosition === "left" && renderIcon()}
        {text}
        {iconPosition === "right" && renderIcon()}
      </button>
    );
  }

  return (
    <Button
      {...rest}
      className="hover:bg-[var(--button-hover)] flex items-center justify-center bg-[var(--button)] text-[var(--button-text)] rounded-md cursor-pointer px-6 py-3 transition duration-100 transform"
    >
      {iconPosition === "left" && renderIcon()}
      {text}
      {iconPosition === "right" && renderIcon()}
    </Button>
  );
};

export default ButtonDefault;
