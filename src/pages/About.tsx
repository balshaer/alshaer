import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/about/Contact";
import Technologies from "@/components/about/Technologies";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function About() {
  return (
    <ScrollArea className="h-screen overflow-y-auto">
      <div className="container mx-auto flex flex-col justify-between min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AboutMe />

          <Technologies />

          <Contact />
        </div>

        <Footer />
      </div>
    </ScrollArea>
  );
}
