import i18n from "@/i18n";
import { Link } from "react-router-dom";

const FooterItems = () => {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={direction}
      className="text-sm flex gap-2 uppercase text-[var(--footer-text)] hoverd max-md:flex-col max-md:items-center "
    >
      <div dir={"ltr"} className="flex gap-2 h-full">
        <Link
          className=" hover:tracking-widest hoverd"
          to={"https://www.youtube.com/@Codewithbaraa"}
        >
          .Youtube
        </Link>

        <Link
          className=" hover:tracking-widest hoverd"
          to={"https://dev.to/baraa"}
        >
          .Blog
        </Link>

        <Link className=" hover:tracking-widest hoverd" to={"/projects"}>
          .projects
        </Link>

        <Link
          className=" hover:tracking-widest hoverd"
          to={"https://www.linkedin.com/in/balshaer/"}
        >
          .Linkedin
        </Link>
      </div>
    </div>
  );
};

export default FooterItems;
