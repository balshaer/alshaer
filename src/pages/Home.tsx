import ExperienceDescription from "@/components/experienceDescription/ExperienceDescription";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Posts from "@/components/posts/Posts";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <ScrollArea className="h-full w-full ">
      <div className="container h-[100vh] flex flex-col gap-[1.5rem]   ">
        <Navbar />
        <Header />
        <ExperienceDescription />

        <Posts />

        <Footer />
      </div>
    </ScrollArea>
  );
}
