import { useEffect, useState } from "react";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { Code, Eye, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiDocument } from "react-icons/hi2";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminChart } from "@/components/admin/layouts/AdminChart";
import axios from "axios";
import { endpoints } from "@/API/API";
import CompactNumber from "@/components/featuers/CompactNumber";

export default function AdminPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [projectsCount, setProjectsCount] = useState("");

  const data = {
    name: "Good evening 🌃",
    title: "Software Developer",
    location: "Palestine",
    specialization: "Full-Stack Developer",
    pageViews: 3500,
    workExperience: [
      {
        title: "Frontend Developer",
        company: "Sustainable Star LLC",
        period: "Jul 2023 - Oct 2023",
        skills: [
          "React js",
          "Typescript",
          "Tailwind CSS",
          "Github",
          "Git",
          "RESTful APIs",
        ],
      },
      {
        title: "Frontend Developer",
        company: "PTIT",
        period: "Jul 2023 - Sep 2023",
        skills: ["React js", "Javascript", "Tailwind CSS", "Github", "Git"],
      },
      {
        title: "Software Engineer - Internship",
        company: "GEDCO",
        period: "Apr 2022 - Jun 2022",
        skills: ["PHP", "MySQL", "Bootstrap"],
      },
    ],

    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PHP",
      "Git",
    ],
  };

  const styles = {
    cardIcon: "h-4 w-4 text-[var(--paragraph)]",
    card: "border-[var(--border)] mb-4 border-b-[0.5px] rounded-none px-0",
  };

  useEffect(() => {
    axios.get(endpoints.projectsArchiveCount).then((res) => {
      setProjectsCount(res.data);
    });
  }, []);

  return (
    <div>
      <PageTitle title={PageTitlesData.adminPage} />

      <h1 className="section-title">{data.name}</h1>

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <HiDocument className={styles.cardIcon} />
          </CardHeader>
          <CardContent>
            <CardTitle>4</CardTitle>
            <CardDescription className="text-xs">experience</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Views</CardTitle>
            <Eye className={styles.cardIcon} />
          </CardHeader>
          <CardContent>
            <CardTitle>{data.pageViews}</CardTitle>
            <CardDescription className="text-xs">
              Total page views
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <Code className={styles.cardIcon} />
          </CardHeader>
          <CardContent>
            <CardTitle className="flex items-start justify-start">
              <CompactNumber value={projectsCount} />
            </CardTitle>
            <CardDescription className="text-xs">
              Showcased projects
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6 border-[var(--border)] bg-[var(--card-background)]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Skills</CardTitle>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div className="sectionIcon">
                <Plus className="h-4 w-4" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Skill</DialogTitle>
                <DialogDescription>
                  Enter a new skill to add to your profile.
                </DialogDescription>
              </DialogHeader>

              <div>
                <Input placeholder="Enter skill name" />
              </div>

              <DialogClose className="w-full">
                <Button className="w-full">Add</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </CardFooter>
        </CardContent>
      </Card>

      <AdminChart />
    </div>
  );
}
