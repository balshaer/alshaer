import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";

interface SelectLanguageProps {
  currentLanguage: string;
  onChange: (lng: string) => void;
}

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
];

const SelectLanguageAdmin: React.FC<SelectLanguageProps> = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div className="relative inline-block">
      <Select onValueChange={changeLanguage} defaultValue={currentLanguage}>
        <SelectTrigger
          className="flex w-max flex-row-reverse items-center justify-center  p-0 gap-2 border-none text-[var(--card-headline)]"
          aria-label={t("SelectLanguage")}
        >
          <SelectValue placeholder={t("SelectLanguage")} />
        </SelectTrigger>
        <SelectContent className="bg-[var(--card-background)] text-[var(--card-headline)]">
          <SelectGroup className="bg-[var(--card-background)] text-[var(--card-headline)]">
            {languages.map((language) => (
              <SelectItem
                key={language.code}
                value={language.code}
                className="bg-[var(--card-background)] text-[var(--card-headline)]"
              >
                {language.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectLanguageAdmin;
