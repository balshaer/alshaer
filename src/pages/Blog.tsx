import AnimatedComponent from "@/components/animations/AnimatedComponent";
import DescriptionOfSection from "@/components/custom/DescriptionOfSection";
import TitleOfSection from "@/components/custom/TitleOfSection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Posts from "@/components/posts/Posts";
import i18n from "@/i18n";

import { useTranslation } from "react-i18next";

export default function Blog() {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const { t } = useTranslation();

  return (
    <div className="h-full w-full ">
      <div className="container h-max min-h-[100vh] max-w-7xl flex flex-col gap-[1.5rem]   ">
        <Navbar />

        <div dir={direction}>
          <div>
            <AnimatedComponent>
              <TitleOfSection title={t("BlogSection.Title")} />
            </AnimatedComponent>

            <AnimatedComponent>
              <DescriptionOfSection
                description={t("BlogSection.Description")}
              />
            </AnimatedComponent>

            <br />
          </div>

          <div>
            <AnimatedComponent>
              <Posts />
            </AnimatedComponent>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
