import ExperienceDescription from "@/components/experienceDescription/ExperienceDescription";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <ScrollArea className="h-full w-full ">
      <div className="container h-max min-h-[100vh] flex flex-col gap-[1.5rem]   ">
        <Navbar />
        <Header />
        <ExperienceDescription />
        <Footer />
      </div>
    </ScrollArea>
  );
}
