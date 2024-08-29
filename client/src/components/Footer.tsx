import footerLinks from "@/data/FooterLinks";
import { scrollToTop } from "@/helper";
import i18n from "@/i18n";
import { t } from "i18next";
import { Link } from "react-router-dom";
export default function Footer() {
  const linkStyle = "hover:tracking-widest hoverd";
  const currentYear = new Date().getFullYear();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <footer className="w-full bg-[var(--footer-background)]  border-t-[0.5px] border-[var(--footer-border-color)]  ">
      <div className="max-w-3xl container  max-md:gap-4 flex justify-between items-center py-10 max-md:flex-col ">
        <div
          dir={direction}
          className="text-sm flex gap-2 capitalize text-[var(--footer-text)] hoverd max-md:flex-col max-md:items-center "
        >
          <div dir={"ltr"} className="flex gap-2 h-full">
            {footerLinks.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (item.title == "Projects") {
                    scrollToTop();
                  }
                }}
              >
                .{" "}
                <Link className={`${linkStyle}`} to={item.link}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm capitalize text-[var(--footer-text)] opacity-90 flex items-center gap-1">
          <span>{currentYear}</span>
          <span>{t("Footer.CopyRight")}</span>
        </div>
      </div>
    </footer>
  );
}
