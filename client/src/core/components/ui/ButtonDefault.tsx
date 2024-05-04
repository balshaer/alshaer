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
      return <Icon className="h-full w-5  flex justify-center items-center" />;
    }
    return null;
  };

  const buttonClassName =
    "h-full gap-1 flex max-md:h-[35px] max-md:p-0 p-8 uppercase font-bold items-center justify-center  rounded-full cursor-pointer px-6 py-3 transition duration-100 transform bg-[var(--button)] border-2 border-[var(--button-border)] text-[var(--button-text)] hoverd hover:bg-[var(--button-hover)] hover:text-[var(--button-text-hover)]";

  const renderButton = (isSubmit: boolean) => (
    <button
      {...rest}
      type={isSubmit ? "submit" : "button"}
      className={buttonClassName}
    >
      {iconPosition === "left" && renderIcon()}
      {text}
      {iconPosition === "right" && renderIcon()}
    </button>
  );

  return isSubmit ? (
    renderButton(true)
  ) : (
    <Button {...rest} className={buttonClassName}>
      {text}
    </Button>
  );
};

export default ButtonDefault;
