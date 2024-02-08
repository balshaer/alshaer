import DescriptionOfSection from "@/components/custom/DescriptionOfSection";
import TitleOfSection from "@/components/custom/TitleOfSection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    // Add more project data as needed
  ];

  return (
    <ScrollArea className="h-full w-full ">
      <div className="container h-[100vh] flex flex-col gap-[1.5rem]   ">
        <Navbar />

        <div>
          <TitleOfSection title={"Projects"} />

          <DescriptionOfSection description="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved." />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-8">
            <a href="https://naj.shamilapp.com/" target="_blank">
              <div className="h-32 rounded-lg bg-[var(--card-background)] border-[#323a4d] hover:border-[#596788]   hovered border cursor-pointer">
                <div className="flex p-4 gap-4 items-center justify-start h-full w-full">
                  <div className="bg-white p-2  rounded-xl">
                    <img
                      src="https://naj.shamilapp.com/static/media/Logo.db28aec4cb4cdcd75f2cb1cf4be26384.svg"
                      alt="logo"
                      height={100}
                      width={100}
                    />
                  </div>

                  <div className="flex gap-1 flex-col">
                    <span className="text-[var(--headline)]">Naj</span>

                    <span className="text-[var(--paragraph)]">
                      Dedicated center providing education to all dental
                      students in Saudi Arabia.
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://github.com/balshaer/gradients-css" target="_blank">
              <div className="h-32 rounded-lg bg-[var(--card-background)] border-[#323a4d] hover:border-[#596788]   hovered border cursor-pointer">
                <div className="flex p-4 gap-4 items-center justify-start h-full w-full">
                  <div className="p-2 ">
                    <img
                      src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-colors-photography-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                      alt="logo"
                      height={50}
                      width={50}
                    />
                  </div>

                  <div className="flex gap-1 flex-col">
                    <span className="text-[var(--headline)]">
                      Gradients CSS
                    </span>

                    <span className="text-[var(--paragraph)]">
                      Collection of CSS gradients
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </ScrollArea>
  );
}
