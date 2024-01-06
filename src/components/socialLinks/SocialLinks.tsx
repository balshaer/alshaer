import { t } from "i18next";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { socialLinksData } from "@/data/socialLinksData";


export default function SocialLinks() {
  return (
    <div className={`SocialLinks  `}>
      <p className="  text-[var(--headline)]">{t("SocialLinks.Note")} </p>

      <div className="flex gap-5" >
        {socialLinksData.map((socialLink, index) => (
          <Link
            key={index}
            to={socialLink.link}
            target="_blank"
            className="flex items-center justify-center gap-1"
          >
            <div>
            <div className="text-[var(--link-color)] hover:text-[var(--main)] flex items-center justify-center gap-2 link-effect "> 

              <span>{socialLink.label}</span>

            <div >
              <div>
                <span>{socialLink.username}</span>
              </div>
              <span >
                <FaArrowUpRightFromSquare size={10} className="mr-1" />
              </span>
            </div>
            </div>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}
