import { t } from "i18next";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { socialLinksData } from "@/data/socialLinksData";

const animateClass = "animate__animated animate__fadeIn animate__slow";

export default function SocialLinks() {
  return (
    <div className={`SocialLinks text-sm  ${animateClass}`}>
      <p className="text-sm text-[var(--paragraph)]">{t("SocialLinks.Note")} </p>

      <div className="flex gap-5" >
        {socialLinksData.map((socialLink, index) => (
          <Link
            key={index}
            to={socialLink.link}
            target="_blank"
            className="flex items-center justify-center gap-1"
          >
            <div>
              <span style={{ color: "var(--link-color)" }}>{socialLink.label}</span>
            </div>

            <div >
              <div>
                <span className="text-[var(--link-color)]">{socialLink.username}</span>
              </div>
              <span className="text-[var(--link-color)]">
                <FaArrowUpRightFromSquare size={10} className="mr-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
