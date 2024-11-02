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
    <footer className="w-full border-t-[0.5px] border-[var(--footer-border-color)] bg-[var(--footer-background)]">
      <div className="container flex items-center justify-between py-10 max-md:flex-col max-md:gap-4 max-md:p-0 max-md:py-14">
        <div
          dir={direction}
          className="hoverd flex gap-2 text-sm capitalize text-[var(--footer-text)] max-md:flex-col max-md:items-center"
        >
          <div dir={direction} className="flex h-full gap-2">
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
        <div className="flex items-center gap-1 text-sm capitalize text-[var(--footer-text)] opacity-90">
          <span>{currentYear}</span>
          <span>{t("Footer.CopyRight")}</span>
        </div>
      </div>
    </footer>
  );
}
