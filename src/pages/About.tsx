import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/about/Contact";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import i18n from "@/i18n";

export default function About() {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div className="h-screen overflow-y-auto">
      <div className="container h-max min-h-[100vh] max-w-6xl flex flex-col justify-between ">
        <Navbar />
        <div
          className="flex flex-col justify-start items-start h-full gap-4"
          dir={direction}
        >
          <AboutMe />

          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
}
