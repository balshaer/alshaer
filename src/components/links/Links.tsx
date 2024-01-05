import { t } from "i18next";
import ParagraphComponent from "../text/ParagraphComponent";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Links() {

  const animate = "animate__animated animate__fadeIn animate__slow";


  return (
    <div className={`Links ${animate}`}>


      <ParagraphComponent text={t("Links.Note")} />


      <div className="flex items-start w-full gap-5  ">

        <div className="hover:text-[var(--highlight)]">


          <Link to={"/experience"} className="flex items-center justify-center gap-1">





            <span className="text-sm text-[var(--link-color)] ">{t("Links.Experience")}</span>

            <span className="text-[var(--link-color)]">
              <FaArrowUpRightFromSquare size={10} />

            </span>

          </Link>

        </div>


        <Link to={"/projects"} className="flex items-center justify-center gap-2">

          <span className="text-sm text-[var(--link-color)]">{t("Links.Projects")}</span>

          <span className="text-[var(--link-color)]">
            <FaArrowUpRightFromSquare size={10} />

          </span>

        </Link>




      </div>

    </div>
  )
}
