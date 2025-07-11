"use client";

import ReusableCard from "@/components/common/ReusableCard";
import { Button } from "@/components/ui/button";
import { github } from "@/data/Links";
import { type Project } from "@/hooks/use-projects";
import { ScrollEffect } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Define your projects data directly here
export const projectsData: Project[] = [
  {
    _id: "proj_1",
    title: "Samtax",
    description:
      "A trusted tax and accounting platform providing expert tax preparation, financial planning, and business advisory services. Developed a secure, scalable web application with multi-language support, integrated payment systems, and AI-powered automation tools.",
    projectType: "Web Application",
    images: [],
    websiteUrl: "https://sam-tax.com/",
    githubUrl: "",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "OAuth",
      "GitHub Actions",
      "Systems Design",
    ],
    featured: true,
    status: "Published",
    createdAt: "2024-06-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
  {
    _id: "proj_2",
    title: "Rove E-commerce",
    description:
      "An e-commerce platform delivering seamless online shopping experiences. Combines modern UI, secure transactions, and scalable architecture to help businesses showcase products and grow sales effortlessly.",
    projectType: "Web Application",
    images: [],
    websiteUrl: "",
    githubUrl: "", // Removed projects.rove reference (undefined)
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "OAuth",
      "JWT",
      "OOP",
      "Webpack",
      "Laravel",
      "PHP",
      "REST APIs",
      "GitHub Actions",
    ],
    featured: true,
    status: "Published",
    createdAt: "2023-05-01T00:00:00.000Z",
    updatedAt: "2023-10-01T00:00:00.000Z",
  },
  {
    _id: "proj_3",
    title: "SFP - Sustainable Star Form Builder",
    description:
      "A powerful, no-code form builder that lets you create, customize, and deploy smart forms in minutes. Designed for teams and creators who need flexible data collection without the technical headache.",
    projectType: "SaaS Platform",
    images: [],
    websiteUrl: "https://sfb-app.com",
    githubUrl: "",
    technologies: [
      "React.js",
      "React DnD",
      "TypeScript",
      "Node.js",
      "SaaS Architecture",
      "Tailwind CSS",
      "JWT",
      "OAuth",
      "REST APIs",
      "UML",
    ],
    featured: true,
    status: "Published",
    createdAt: "2023-06-01T00:00:00.000Z",
    updatedAt: "2023-11-30T00:00:00.000Z",
  },
  {
    _id: "proj_4",
    title: "Gradients CSS",
    description:
      "A modern tool that takes the hassle out of creating stunning gradients. Helps developers and designers explore, customize, and export beautiful CSS gradients with ease.",
    projectType: "Tool",
    images: [],
    websiteUrl: "https://gradientscss.vercel.app/",
    githubUrl: "", // Removed projects.gradientscss.github (undefined)
    technologies: ["React", "TypeScript", "Tailwind CSS", "CSS3", "Vite"],
    featured: true,
    status: "Published",
    createdAt: "2023-03-01T00:00:00.000Z",
    updatedAt: "2023-06-01T00:00:00.000Z",
  },
  {
    _id: "proj_5",
    title: "Barber Academy",
    description:
      "Developed a comprehensive website for Barber Academy, enabling online appointment scheduling and showcasing a complete range of services. Delivered a user-friendly platform that increased client engagement and streamlined operations.",
    projectType: "Website",
    images: [],
    websiteUrl: "https://raoufzadi.vercel.app/",
    githubUrl: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    featured: true,
    status: "Published",
    createdAt: "2022-11-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    _id: "proj_6",
    title: "NAJ Training Center",
    description:
      "A training center website with course management, student enrollment, and progress tracking. Contributed to the project during my time at PTIT, enhancing functionality and maintaining legacy systems.",
    projectType: "Web Application",
    images: [],
    websiteUrl: "", // Removed projects.najcenter reference (undefined)
    githubUrl: "",
    technologies: ["React", "JavaScript", "Material-UI", "Node.js"],
    featured: false,
    status: "Published",
    createdAt: "2023-06-01T00:00:00.000Z",
    updatedAt: "2023-09-30T00:00:00.000Z",
  },
];

const styles = {
  linkStyle:
    "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70",
};

const isValidLink = (link?: string) => !!link?.trim() && link !== "#";

type ProjectsProps = {
  filterType?: string;
};

const mapProjectToComponentFormat = (project: Project) => ({
  id: project._id,
  type: project.projectType.toLowerCase(),
  title: project.title,
  description: project.description,
  skills: project.technologies,
  images: project.images || [],
  links: {
    website: project.websiteUrl || undefined,
    github: project.githubUrl || undefined,
    video: project.videoUrl || undefined,
  },
});

function ProjectImageWithBg({ images }: { images: string[] }) {
  return (
    <div className="relative rounded-xl overflow-hidden w-full max-w-[90%] mx-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className="relative project-carousel"
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition text-white"
              aria-label="Previous slide"
            >
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition text-white"
              aria-label="Next slide"
            >
              &#10095;
            </button>
          )
        }
      >
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`project preview ${idx + 1}`}
              loading="lazy"
              className="w-full h-72 object-contain relative z-10"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default function Projects({ filterType = "all" }: ProjectsProps) {
  // Use the static data directly instead of fetching
  const projects = projectsData;

  const filteredProjects = useMemo(() => {
    const mapped = projects.map(mapProjectToComponentFormat);
    if (filterType.toLowerCase() === "all") return mapped;
    return mapped.filter(
      (project) => project.type === filterType.toLowerCase()
    );
  }, [projects, filterType]);

  const [showPreviewById, setShowPreviewById] = useState<
    Record<string, boolean>
  >({});

  const togglePreview = (id: string) => {
    setShowPreviewById((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (filteredProjects.length === 0)
    return (
      <div className="projects-cards flex flex-col gap-8 pb-16">
        <div className="flex items-center justify-center py-12 text-center">
          <p className="text-[var(--paragraph)] text-sm opacity-70">
            {filterType.toLowerCase() === "all"
              ? "No projects have been published yet."
              : `No ${filterType} projects found.`}
          </p>
        </div>
      </div>
    );

  return (
    <div className="projects-cards flex flex-col gap-12 pb-16">
      {filteredProjects.map((project) => {
        const links = [
          isValidLink(project.links.github) && {
            title: "GitHub",
            link: project.links.github!,
          },
          isValidLink(project.links.website) && {
            title: "Website",
            link: project.links.website!,
          },
          isValidLink(project.links.video) && {
            title: "Demo",
            link: project.links.video!,
          },
        ].filter(Boolean) as { title: string; link: string }[];

        const isPreviewShown = showPreviewById[project.id] || false;

        return (
          <ScrollEffect key={project.id} type="fadeUp">
            <div className="bg-[var(--card-background)] border border-[var(--card-border-color)] rounded-2xl shadow-md p-6 flex flex-col gap-4">
              {project.images.length > 0 && (
                <Button
                  onClick={() => togglePreview(project.id)}
                  className="self-start mb-2 flex items-center gap-2"
                >
                  <motion.span
                    key={isPreviewShown ? "eyeoff" : "eye"}
                    initial={{ rotate: -20, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 20, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center"
                  >
                    {isPreviewShown ? <EyeOff size={16} /> : <Eye size={16} />}
                  </motion.span>
                </Button>
              )}

              <AnimatePresence initial={false}>
                {isPreviewShown && project.images.length > 0 && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ProjectImageWithBg images={project.images} />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-3">
                <ReusableCard
                  id={project.id.toString()}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  websiteLink={project.links.website}
                  githubLink={project.links.github}
                  linkStyle={styles.linkStyle}
                />

                {links.length > 0 && (
                  <div className="flex gap-3 justify-end pt-2">
                    {links.map(({ title, link }) => (
                      <Link
                        key={title}
                        href={link}
                        className="reactbits-link-hover text-xs text-[var(--headline)] opacity-70"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollEffect>
        );
      })}

      <h2 className="text-base text-[var(--paragraph)] opacity-80">
        You can find more projects and open-source contributions on my
        <Link className="link text-base px-1" href={github}>
          <span>GitHub profile.</span>
        </Link>
      </h2>
    </div>
  );
}
