import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import ButtonDefault from "../custom/ButtonDefault";
import { GrSend } from "react-icons/gr";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="  flex items-start justify-start flex-col w-full gap-4 py-40 max-md:py-20">
      <div>
        <h1 className="text-[var(--headline)] text-5xl font-bold select-none flex flex-col gap-4">
          <span className="max-md:text-3xl">
            Software engineer, technical writer <br /> & open-source maintainer
          </span>
        </h1>
      </div>

      <div>
        <p className="text-[var(--paragraph)]  text-xl max-md:text-lg max-md:w-full">
          I'm Baraa Alshaer, an experienced frontend developer passionate about
          learning and building open-source software that is beneficial to
          developers and the world at large.
        </p>
      </div>

      <form className="flex gap-4 max-md:flex-col">
        <div className="h-full flex items-center w-full">
          <Input
            className="bg-[var(--input-background)] text-[#a0aec0] placeholder-[var(--paragraph)]
            w-max
            h-max
            min-w-80
            border-[var(--input-border-color)]
            flex items-center border  rounded-md font-mono  px-4 py-3 text-md"
            type="text"
            required
            placeholder="Lets Connect , Enter your email"
          />
        </div>

        <div className="h-full flex items-center">
          <ButtonDefault
            isSubmit
            text={"Add message"}
            iconPosition="right"
            icon={GrSend}
          />
        </div>
      </form>
    </div>
  );
}
