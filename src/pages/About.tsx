import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/about/Contact";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function About() {
  return (
    <ScrollArea className="h-screen overflow-y-auto">
      <div className="container h-max min-h-[100vh] mx-auto flex flex-col justify-between ">
        <Navbar />
        <div className="flex-grow">
          <AboutMe />

          <Contact />
        </div>

        <Footer />
      </div>
    </ScrollArea>
  );
}
