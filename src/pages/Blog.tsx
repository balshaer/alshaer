import DescriptionOfSection from "@/components/custom/DescriptionOfSection";
import TitleOfSection from "@/components/custom/TitleOfSection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Posts from "@/components/posts/Posts";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Blog() {
  return (
    <ScrollArea className="h-full w-full ">
      <div className="container h-max min-h-[100vh] flex flex-col gap-[1.5rem]   ">
        <Navbar />

        <div>
          <TitleOfSection title={"Blog"} />

          <DescriptionOfSection description="sharing insights, projects, and noteworthy discoveries, alongside contributions to various esteemed publications. Explore the latest posts below:" />
          <br />
        </div>

        <div>
          <Posts />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </ScrollArea>
  );
}
