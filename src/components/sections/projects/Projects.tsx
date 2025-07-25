"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  website: string;
  github?: string;
  technologies: string[];
  status: string;
  featured: boolean;
  created: string;
  updated: string;
  videoUrl?: string;
  logoFileName: string; // New field for local logo file
}

const projectsData: Project[] = [
  {
    id: "proj_1",
    title: "sam-tax.com",
    description:
      `• Trusted tax and accounting platform for expert tax preparation, financial planning, and business advisory services.\n\n• Developed a secure, scalable web application with multi-language support.\n\n• Integrated payment systems and AI-powered automation tools for enhanced efficiency.`,
    type: "Web Application",
    website: "https://sam-tax.com/",
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
    status: "Published",
    featured: true,
    created: "2024-06-01",
    updated: "",
    logoFileName: "samtax.svg",
  },
  {
    id: "proj_3",
    title: "SF",
    description:
      `• Powerful no-code form builder for creating, customizing, and deploying smart forms in minutes.\n\n• Designed for teams and creators needing flexible data collection without technical headaches.\n\n• Features drag-and-drop, advanced logic, and seamless integrations.`,
    type: "SaaS Platform",
    website: "https://sfb-app.com",
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
    status: "Published",
    featured: true,
    created: "2023-06-01",
    updated: "2023-11-30",
    videoUrl: "https://www.youtube.com/watch?v=2IqjzGT1l1c",
    logoFileName: "sfb.svg",
  },
  {
    id: "proj_4",
    title: "Gradients CSS",
    description:
      `• Modern tool for creating, exploring, and exporting beautiful CSS gradients.\n\n• Helps developers and designers customize gradients with ease.\n\n• Features real-time preview and export options for quick workflow.`,
    type: "Tool",
    website: "https://gradientscss.vercel.app/",
    github: "https://github.com/projects/gradientscss",
    technologies: ["React", "TypeScript", "Tailwind CSS", "CSS3", "Vite"],
    status: "Published",
    featured: true,
    created: "2023-03-01",
    updated: "2023-06-01",
    logoFileName: "gradientscss.png",
  },
  {
    id: "proj_5",
    title: "Barber Academy",
    description:
      `• Comprehensive website for Barber Academy with online appointment scheduling.\n\n• Showcases a complete range of services and streamlines operations.\n\n• Delivered a user-friendly platform that increased client engagement.`,
    type: "Website",
    website: "https://raoufzadi.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    status: "Published",
    featured: true,
    created: "2022-11-01",
    updated: "2023-01-01",
    logoFileName: "barber.svg",
  },
  {
    id: "proj_6",
    title: "SaaScan",
    description:
      `• Open source tool for analyzing SaaS ideas and generating validation reports.\n\n• Assesses market fit, competition, pricing strategies, and opportunities.\n\n• Helps entrepreneurs and product teams make informed decisions before investing.`,
    type: "Tool",
    website: "https://saascan.vercel.app/",
    github: "https://github.com/balshaer/saascan",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    status: "Published",
    featured: false,
    created: "2023-01-01",
    updated: "",
    logoFileName: "saascan.png",
  },
];

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  const contentVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section
      data-slot="panel"
    
      id="projects"
    >
      <div data-slot="panel-header" className="screen-line-after px-4">
        <h2
          data-slot="panel-title"
          className="section-title"
          style={{ color: "var(--headline)" }}
        >
          Projects
     
        </h2>
      </div>

      {projectsData.map((project) => (
        <div
          key={project.id}
          className="border-b"
          style={{ borderColor: "var(--card-border-color)" }}
          data-state={openProjectId === project.id ? "open" : "closed"}
        >
          <div className="flex items-center ">

<div

              className="mx-4 flex size-6 bg-[var(--card-background)] h-8 w-8 border  p-1 rounded-full  shrink-0"
>


     <img
              alt={`${project.title} logo`}
              loading="lazy"
              width={32}
              height={32}
              className="rounded-full"
              decoding="async"
              src={`/logos/${project.logoFileName}`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://via.placeholder.com/32?text=P";
              }}
              style={{ objectFit: "contain" }}
            />
</div>

       
            <div
              className="flex-1 border-l border-dashed"
              style={{ borderColor: "var(--card-border-color)" }}
            >
              <button
                type="button"
                aria-controls={`radix-${project.id}`}
                aria-expanded={openProjectId === project.id}
                data-state={openProjectId === project.id ? "open" : "closed"}
                className="group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none"
                onClick={() => toggleProject(project.id)}
                style={{ color: "var(--main)" }}
              >
                <div className="flex-1">
                  <h3
                    className="mb-1 leading-snug font-medium"
                    style={{ color: "var(--card-headline)" }}
                  >
                    {project.title}
                  </h3>
                  <dl className="text-sm" style={{ color: "var(--card-paragraph)" }}>
                    <dt className="sr-only">Period</dt>
                    <dd className="flex items-center gap-0.5">
                      <span>
                        {project.created
                          ? new Date(project.created).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                            })
                          : "Unknown"}
                      </span>
                      <span className="font-mono">—</span>
                      {project.status === "Published" && project.updated === ""
                        ? "Present"
                        : project.updated
                        ? new Date(project.updated).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                          })
                        : "Unknown"}
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex size-6 shrink-0 items-center justify-center"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-state="closed"
                  data-slot="tooltip-trigger"
                  style={{ color: "var(--link-color)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-link pointer-events-none size-4"
                    aria-hidden="true"
                    style={{ stroke: "var(--link-color)" }}
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span className="sr-only">Open Project Link</span>
                </a>
                <div
                  className="shrink-0"
                  aria-hidden="true"
                  style={{ color: "var(--paragraph)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide ${
                      openProjectId === project.id
                        ? "lucide-chevrons-down-up"
                        : "lucide-chevrons-up-down"
                    } size-4`}
                    aria-hidden="true"
                    style={{ stroke: "var(--paragraph)" }}
                  >
                    {openProjectId === project.id ? (
                      <>
                        <path d="m7 20 5-5 5 5"></path>
                        <path d="m7 4 5 5 5-5"></path>
                      </>
                    ) : (
                      <>
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                      </>
                    )}
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {openProjectId === project.id && (
              <motion.div
                key={`content-${project.id}`}
                id={`radix-${project.id}`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                  closed: {
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                }}
                style={{
                  overflow: "hidden",
                  borderTopStyle: "dashed",
                  borderTopWidth: 1,
                  borderColor: "var(--card-border-color)",
                }}
              >
                <div
                  data-slot="prose"
                  className="prose prose-sm max-w-none font-mono prose-headings:font-semibold prose-headings:text-2xl prose-lead:text-base prose-a:font-medium prose-a:underline prose-code:rounded-md prose-code:border prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge p-4"
                  style={{ color: "var(--card-paragraph)" }}
                >
                  <ul className="mb-4 list-disc ml-6 space-y-2">
                    {project.description.split("\n\n").map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-base leading-5">-</span>
                        <span>{item.replace(/^•\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                  {project.videoUrl && (
                    <p className="mb-2">
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                        style={{ color: "var(--link-color)" }}
                      >
                        Watch Video
                      </a>
                    </p>
                  )}
                  <ul className="mb-2 space-y-1">
                    <li>
                      <strong style={{ color: "var(--headline)" }}>Type:</strong>{" "}
                      {project.type}
                    </li>
                    <li>
                      <strong style={{ color: "var(--headline)" }}>Status:</strong>{" "}
                      {project.status}
                    </li>
                    {project.github && (
                      <li>
                        <strong style={{ color: "var(--headline)" }}>GitHub:</strong>{" "}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          style={{ color: "var(--link-color)" }}
                        >
                          {project.github}
                        </a>
                      </li>
                    )}
                    <li>
                      <strong style={{ color: "var(--headline)" }}>Technologies:</strong>{" "}
                      {project.technologies.length > 0
                        ? project.technologies.join(", ")
                        : "N/A"}
                    </li>
                    <li>
                      <strong style={{ color: "var(--headline)" }}>Created:</strong>{" "}
                      {project.created
                        ? new Date(project.created).toLocaleDateString("en-US")
                        : "Unknown"}
                    </li>
                    <li>
                      <strong style={{ color: "var(--headline)" }}>Updated:</strong>{" "}
                      {project.status === "Published" && !project.updated ? (
                        <span className="inline-flex items-center gap-1">Present</span>
                      ) : project.updated ? (
                        new Date(project.updated).toLocaleDateString("en-US")
                      ) : (
                        "Unknown"
                      )}
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default Projects;
