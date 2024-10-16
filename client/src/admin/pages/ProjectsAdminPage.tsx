import { Badge } from "@/components/ui/badge";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import {
  EditIcon,
  Globe,
  MoreHorizontal,
  Plus,
  Settings,
  Trash2,
} from "lucide-react";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { endpoints } from "@/API/API";
import { toast } from "sonner";

interface ProjectData {
  _id: string;
  title: string;
  description: string;
  badge?: string[];
  visitWebsite?: string;
  visitGithub?: string;
  links?: { website: string; github: string }[];
}

const ProjectsAdminPage = () => {
  const [OTP, setOTP] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Function to delete a single project
  const deleteProject = async (_id: string) => {
    try {
      const response = await axios.delete(
        `${endpoints.deleteProject.replace(":id", _id)}`,
      );
      if (response.status === 200) {
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== _id),
        );
        toast.success("Project deleted successfully");
      } else {
        toast.error("Failed to delete project");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleting the project");
    }
  };

  useEffect(() => {
    axios
      .get(endpoints.getAllProjects)
      .then((response) => setProjects(response.data));
  }, []);

  const showOTP = () => {
    setOTP(true);
  };

  // Function to delete all projects
  const deleteAllProjects = async () => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(endpoints.deleteAllProjects);
      if (response.status === 200) {
        setProjects([]);
        toast.success("All projects deleted successfully");
      } else {
        toast.error("Failed to delete projects");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error deleting projects");
    } finally {
      setIsDeleting(false);
    }
  };

  const styles = {
    dropdownMenuItem: "flex items-center justify-end gap-2 cursor-pointer ",
    linkStyle:
      "hoverd flex cursor-pointer items-center gap-2 hover:text-[var(--headline)] text-sm",
  };

  const openDeleteDialog = () => {};

  return (
    <div>
      <PageTitle title={PageTitlesData.adminProjects} />

      <header className="flex items-center justify-between">
        <h1 className="section-title">Projects</h1>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="flex h-full items-center justify-center text-[var(--headline)]">
                <Settings className="sectionIcon" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[var(--card-background)] text-[var(--headline)]">
              <Link className="w-full" to={"/admin/project/add"}>
                <DropdownMenuItem className={styles.dropdownMenuItem}>
                  <span>Add a new project</span>

                  <div className="dropdownMenuItemIcon">
                    <Plus className="h-4 w-4" />
                  </div>
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem
                onClick={openDeleteDialog}
                className={styles.dropdownMenuItem}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={openDeleteDialog}
                      className="flex items-center gap-2"
                      type="submit"
                    >
                      <Trash2 className="dropdownMenuItemIcon" />
                      <span>Delete all projects</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="border-none bg-[var(--card-background)] text-center sm:max-w-[425px]">
                    {OTP === false && (
                      <DialogHeader>
                        <DialogTitle className="py-4 text-center text-[var(--headline)]">
                          Delete All Projects
                        </DialogTitle>
                        <DialogDescription className="text-center">
                          Are you sure you want to delete all projects?
                        </DialogDescription>
                      </DialogHeader>
                    )}

                    {OTP && (
                      <DialogHeader>
                        <DialogTitle className="py-4 text-center text-[var(--headline)]">
                          Delete all projects
                        </DialogTitle>
                      </DialogHeader>
                    )}

                    {OTP && (
                      <div className="flex w-full items-center justify-center">
                        <InputOTP maxLength={6}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    )}

                    {OTP === false && (
                      <div className="flex w-full items-center justify-center gap-4 py-4">
                        <Button onClick={showOTP} className="w-full">
                          Yes, delete them
                        </Button>
                      </div>
                    )}

                    {OTP && (
                      <div className="flex w-full items-center justify-center gap-4 py-4">
                        <DialogClose className="w-full">
                          <Button
                            onClick={deleteAllProjects}
                            className="w-full"
                            disabled={isDeleting}
                          >
                            {isDeleting ? "Deleting..." : "Delete all projects"}
                          </Button>
                        </DialogClose>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="cardGroup">
        {projects.map((project: ProjectData) => (
          <div>
            {projects.length === 0 && <p>No projects found</p>}

            <Card key={project._id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span className="flex h-full items-center justify-center text-[var(--headline)]">
                      <MoreHorizontal className="h-4 w-4 cursor-pointer" />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[var(--background)] text-[var(--headline)]">
                    <Link to={`/admin/project/edit/${project._id}`}>
                      <DropdownMenuItem className={styles.dropdownMenuItem}>
                        <span>Edit</span>
                        <EditIcon className="h-4 w-4" />
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem
                      onClick={() => deleteProject(project._id)}
                      className={styles.dropdownMenuItem}
                    >
                      <span>Delete </span>

                      <Trash2 className="h-4 w-4" />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>

              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="my-4 flex w-full flex-wrap items-center justify-between max-md:flex-col max-md:items-start">
                <div className="flex max-w-[60%] flex-wrap gap-2">
                  {project.badge &&
                    project.badge.map((badge, index) => (
                      <Badge key={index}>{badge}</Badge>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 max-md:mt-5">
                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      className={styles.linkStyle}
                    >
                      <span>
                        <Globe className="h-4 w-4" />
                      </span>
                      <span>Visit Website</span>
                    </a>
                  )}

                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      className={styles.linkStyle}
                    >
                      <span>
                        <ImGithub className="h-4 w-4" />
                      </span>
                      <span>Visit Github</span>
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAdminPage;
