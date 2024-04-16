import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/about/Contact";
import i18n from "@/i18n";

export default function About() {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div
      id="about"
      className="flex flex-col justify-start items-start h-full gap-4 py-10"
      dir={direction}
    >
      <AboutMe />

      <Contact />
    </div>
  );
}
