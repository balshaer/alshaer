import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageModeProps {
  className?: string;
}

export default function LanguageMode({ className = "" }: LanguageModeProps) {
  const { i18n, t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    toast(t("Language.change"));
  };

  const iconAnimationVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 0.9, 1], transition: { duration: 0.2 } },
  };

  const DesktopLanguageIcon = () => (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
      whileTap="animate"
    >
      <motion.div
        variants={iconAnimationVariants}
        className="ms-1"
        initial="initial"
      >
        <div className="relative m-0 w-max p-0 text-[var(--headline)]">
          <Languages className="h-4 w-4" />
          <span className="sr-only">
            {i18n.language === "ar" ? "Switch to English" : "Switch to Arabic"}
          </span>
          <span className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center">
            <span className="text-[8px] font-bold">
              {i18n.language.toUpperCase()}
            </span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );

  const MobileLanguageSelect = () => (
    <Select value={i18n.language} onValueChange={changeLanguage}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>
      </SelectContent>
    </Select>
  );

  return (
    <div className={className}>
      {isMobile ? <MobileLanguageSelect /> : <DesktopLanguageIcon />}
    </div>
  );
}
