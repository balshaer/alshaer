"use client";

import { useState } from "react";
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
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const data = {
    name: "Baraa Alshaer",
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
    projects: [
      {
        name: "Naj training center",
        description: "Dedicated center for dental education in Saudi Arabia.",
        technologies: ["React JS", "Javascript", "MIUI"],
        websiteUrl: "#",
      },
      {
        name: "Gradients CSS",
        description:
          "A sophisticated gradient tool designed for both designers and developers.",
        technologies: ["Next JS", "Typescript"],
        websiteUrl: "#",
        githubUrl: "#",
      },
      {
        name: "Rove",
        description: "A comprehensive full-stack e-commerce web application.",
        technologies: ["React", "Tailwind CSS", "Laravel", "MYSQL"],
        githubUrl: "#",
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
            <CardTitle>{data.projects.length}</CardTitle>
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
              <Button
                variant="outline"
                size="icon"
                className="adminSectionIcon z-50"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Skill</DialogTitle>
                <DialogDescription>
                  Enter a new skill to add to your profile.
                </DialogDescription>
              </DialogHeader>
              {/* Add form elements here for adding a new skill */}
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
    </div>
  );
}
