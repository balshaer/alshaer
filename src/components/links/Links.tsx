import { t } from "i18next";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Links() {
  return (
    <div className={`Links`}>
      <p className="  text-[var(--headline)]">{t("Links.Note")} </p>
      <div className="flex items-start w-full gap-5  ">
        <div className="hover:text-[var(--highlight)]">
          <Link   to={"/experience"}>
          <div className="text-[var(--link-color)] hover:text-[var(--main)] flex items-center justify-center gap-2 link-effect "> 

            <span>{t("Links.Experience")}</span>
            <span>
              <FaArrowUpRightFromSquare size={10} />
            </span>

          </div>

          </Link>
        </div>
        <Link to={"/projects"} >
          <div className="text-[var(--link-color)] hover:text-[var(--main)] flex items-center justify-center gap-2 link-effect "> 

          <span >{t("Links.Projects")}</span>
          <span>
            <FaArrowUpRightFromSquare size={10} />
          </span>
          </div>

        </Link>
      </div>
    </div>
  )
}
