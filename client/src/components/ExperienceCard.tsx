import { experienceData } from "@/data/ExperienceData";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

const ExperienceCard = () => {
  const { t } = useTranslation();

  return (
    <div
      data-aos="fade-up"
      className="cards w-full max-md:w-full min-h-[100px] flex flex-col gap-5 cursor-text"
    >
      {experienceData.map((item, index) => (
        <div key={index} className="card">
          <header className="w-full flex justify-between items-center max-md:flex-col max-md:items-start  ">
            <div className="flex items-center gap-1">
              <h1 className="font-bold  title">
                {t(item.jobTitle)}{" "}
                <span className="opacity-60">
                  {""} {t("Public.At")} {""}
                </span>
                <a href={item.Link} target="_blank" className="cursor-pointer">
                  {t(item.companyName)}
                </a>
              </h1>
            </div>

            <div className="h-full flex justify-center items-center">
              <span className="text-sm text-[var(--headline)] max-[400px]:py-2  ">
                {t(item.jobDate)}
              </span>
            </div>
          </header>

          <p className=" py-3 description ">{t(item.jobDescription)}</p>
          <div className="flex gap-2 my-2 flex-wrap">
            {item.skills.map((skill, i) => (
              <Badge key={i} className="badge">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
