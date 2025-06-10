"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, ExternalLink, Edit, Trash2, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectsListProps {
  projects?: Project[];
  searchQuery?: string;
  filters?: Record<string, any>;
  isLoading?: boolean;
}

type Project = {
  _id: string;
  title: string;
  description: string;
  projectType: string;
  images: string[];
  technologies: string[];
  status: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  githubUrl?: string;
  websiteUrl?: string;
  videoUrl?: string;
};

export function ProjectsList({
  projects: propProjects,
  searchQuery = "",
  filters = {},
  isLoading = false,
}: ProjectsListProps) {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>(propProjects || []);
  const [loading, setLoading] = useState(!propProjects);

  useEffect(() => {
    if (propProjects) {
      setProjects(propProjects);
      setLoading(isLoading);
      return;
    }

    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await fetch("/api/projects");
        const data = await response.json();

        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        toast({
          title: "Error",
          description: "Failed to load projects. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [propProjects, isLoading, toast]);

  // Client-side filtering and searching
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.projectType.toLowerCase().includes(query) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(query)
          )
      );
    }

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) return;

      switch (key) {
        case "projectType":
          filtered = filtered.filter(
            (project) => project.projectType === value
          );
          break;
        case "status":
          filtered = filtered.filter((project) => project.status === value);
          break;
        case "featured":
          filtered = filtered.filter((project) =>
            value === "true" ? project.featured : !project.featured
          );
          break;
        case "technologies":
          if (Array.isArray(value)) {
            filtered = filtered.filter((project) =>
              value.some((tech) => project.technologies.includes(tech))
            );
          }
          break;
      }
    });

    return filtered;
  }, [projects, searchQuery, filters]);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await fetch(`/api/projects/${id}`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (data.success) {
          setProjects(projects.filter((project) => project._id !== id));
          toast({
            title: "Success",
            description: "Project deleted successfully",
          });
        } else {
          throw new Error(data.error || "Failed to delete project");
        }
      } catch (error) {
        console.error("Error deleting project:", error);
        toast({
          title: "Error",
          description: "Failed to delete project. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card
            key={i}
            className="overflow-hidden bg-[var(--card-background)] border-[var(--card-border-color)]"
          >
            <Skeleton className="aspect-video w-full" />
            <CardHeader className="py-4">
              <div className="flex items-start justify-between w-full">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-8 w-8" />
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-3">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-14" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-16" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (filteredProjects.length === 0 && !loading) {
    const hasFilters =
      searchQuery.trim() || Object.keys(filters).some((key) => filters[key]);

    return (
      <Card className="bg-[var(--card-background)] border-[var(--card-border-color)] p-8 text-center">
        <h3 className="text-xl font-semibold text-[var(--card-headline)]">
          {hasFilters ? "No projects match your criteria" : "No projects found"}
        </h3>
        <p className="text-[var(--card-paragraph)] mt-2">
          {hasFilters
            ? "Try adjusting your search or filters to find what you're looking for."
            : "Start by adding your first project to showcase your work."}
        </p>
        {!hasFilters && (
          <Link href="/dashboard/projects/new">
            <Button className="mt-4 mx-auto bg-[var(--button)] text-[var(--button-text)] hover:bg-[var(--button2)]">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </Link>
        )}
      </Card>
    );
  }

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredProjects.map((project) => (
        <motion.div key={project._id} variants={itemVariants}>
          <Card className="overflow-hidden bg-[var(--card-background)] border-[var(--card-border-color)]">
            <div className="aspect-video w-full overflow-hidden bg-[var(--card-background-effect)]">
              {project.images && project.images.length > 0 ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-[var(--card-background)] border-2  rounded-[12px]">
                  <div className="text-center ">
                    <svg
                      className="mx-auto h-12 w-12 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs">No Image</p>
                  </div>
                </div>
              )}
            </div>
            <CardHeader className="py-4">
              <div className="flex items-start justify-between w-full">
                <div>
                  <CardTitle className="text-xl text-[var(--card-headline)]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[var(--card-paragraph)]">
                    {project.projectType}
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[var(--paragraph)]"
                    >
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-[var(--card-background)] border-[var(--card-border-color)] text-[var(--card-headline)]"
                  >
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link href={`/dashboard/projects/${project._id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    {project.websiteUrl && (
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </a>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(project._id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="py-4 pt-0">
              <p className="text-sm text-[var(--card-paragraph)] mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-[var(--button2)] text-[var(--button-text)]"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge
                    variant="outline"
                    className="border-[var(--card-border-color)] text-[var(--paragraph)]"
                  >
                    +{project.technologies.length - 3} more
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between py-4 pt-0">
              <Badge
                variant={project.status === "Published" ? "default" : "outline"}
                className={
                  project.status === "Published"
                    ? "bg-[var(--tertiary)] text-[var(--button-text)]"
                    : "border-[var(--card-border-color)] text-[var(--paragraph)]"
                }
              >
                {project.status}
              </Badge>
              {project.featured && (
                <Badge className="bg-[var(--highlight)] text-[var(--button-text)]">
                  Featured
                </Badge>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
