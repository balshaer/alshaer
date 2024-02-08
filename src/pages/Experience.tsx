import ExperienceCardSkills from "@/components/experience/ExperienceCardSkills";
import Navbar from "@/components/navbar/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Experience() {
  return (
    <ScrollArea className="h-full w-full ">
      <div className="container h-[100vh] flex flex-col gap-[1.5rem]   ">
        <Navbar />
        <ExperienceCardSkills />
      </div>
    </ScrollArea>
  );
}
