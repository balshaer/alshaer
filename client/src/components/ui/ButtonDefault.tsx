import React from "react";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Button } from "./button";

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
      return <Icon className="h-full w-4 flex justify-center items-center " />;
    }
    return null;
  };

  const buttonStyle =
    "h-full gap-1 flex  max-md:h-[35px   capitalize font-bold items-center justify-center  rounded-full cursor-pointer px-6 py-3 transition duration-100 transform bg-[var(--button)] border-2 border-[var(--button-border)] text-[var(--button-text)] hoverd hover:bg-[var(--button-hover)] hover:text-[var(--button-text-hover)] ";

  const renderButton = (isSubmit: boolean) => (
    <button
      {...rest}
      type={isSubmit ? "submit" : "button"}
      className={buttonStyle}
    >
      {iconPosition === "left" && renderIcon()}
      {text}
      {iconPosition === "right" && renderIcon()}
    </button>
  );

  return isSubmit ? (
    renderButton(true)
  ) : (
    <Button {...rest} className={buttonStyle}>
      {text}
    </Button>
  );
};

export default ButtonDefault;
