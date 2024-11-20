import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  EditIcon,
  Globe,
  MoreHorizontal,
  Plus,
  Settings,
  Trash2,
  GripVertical,
} from "lucide-react";
import { ImGithub } from "react-icons/im";
import { endpoints } from "@/API/API";
import CompactNumber from "@/components/featuers/CompactNumber";

interface ProjectData {
  _id: string;
  title: string;
  description: string;
  badge?: string[];
  visitWebsite?: string;
  visitGithub?: string;
  archived: boolean;
  order: number;
}

export default function ProjectsAdminPage() {
  const [otp, setOtp] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [projectsCount, setProjectsCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
    fetchProjectsCount();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(endpoints.getUnArchivedProjects);
      setProjects(
        response.data.sort(
          (a: ProjectData, b: ProjectData) => a.order - b.order,
        ),
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
      setLoading(false);
    }
  };

  const fetchProjectsCount = async () => {
    try {
      const response = await axios.get(endpoints.projectsArchiveCount);
      setProjectsCount(response.data);
    } catch (error) {
      console.error("Error fetching projects count:", error);
      toast.error("Failed to fetch projects count");
    }
  };

  const deleteProject = async (_id: string) => {
    try {
      await axios.post(`${endpoints.archiveProject}${_id}`);
      toast.success("Project deleted successfully");
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    }
  };

  const deleteAllProjects = async () => {
    try {
      setIsDeleting(true);
      await axios.post(endpoints.archiveAllProject);
      toast.success("All projects deleted successfully");
      setProjects([]);
    } catch (error) {
      console.error("Error deleting all projects:", error);
      toast.error("Failed to delete all projects");
    } finally {
      setIsDeleting(false);
      setIsDialogOpen(false);
    }
  };

  const onDragEnd = async (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedProjects = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setProjects(updatedProjects);

    try {
      await axios.post(endpoints.updateProjectOrder, {
        projects: updatedProjects,
      });
      toast.success("Project order updated successfully");
    } catch (error) {
      console.error("Error updating project order:", error);
      toast.error("Failed to update project order");
    }
  };

  const styles = {
    dropdownMenuItem:
      "flex items-center justify-end gap-2 cursor-pointer hover",
    linkStyle:
      "flex cursor-pointer items-center gap-2 hover:text-[var(--headline)] text-sm",
  };

  return (
    <div>
      {/* <PageTitle title={PageTitlesData.adminProjects} /> */}
      <header className="flex items-center justify-between">
        <div className="section-title flex flex-row gap-1">
          <span>Projects</span>
          <span className="flex items-center justify-center">
            (<CompactNumber value={projectsCount} />)
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="flex h-full items-center justify-center text-[var(--headline)]">
              <Settings className="sectionIcon" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[var(--card-background)] text-[var(--headline)]">
            <Link className="w-full" to="/admin/project/add">
              <DropdownMenuItem className={styles.dropdownMenuItem}>
                <span>Add a new project</span>
                <Plus className="dropdownMenuItemIcon" />
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              onClick={() => setIsDialogOpen(true)}
              className={styles.dropdownMenuItem}
            >
              <span>Delete all projects</span>
              <Trash2 className="dropdownMenuItemIcon" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="border-none bg-[var(--card-background)] text-center sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="py-4 text-center text-[var(--headline)]">
              Delete All Projects
            </DialogTitle>
            <DialogDescription className="text-center">
              Are you sure you want to delete all projects?
            </DialogDescription>
          </DialogHeader>

          {otp && (
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

          <div className="flex w-full items-center justify-center gap-4 py-4">
            {!otp ? (
              <Button onClick={() => setOtp(true)} className="w-full">
                Yes, delete them
              </Button>
            ) : (
              <DialogClose className="w-full">
                <Button
                  onClick={deleteAllProjects}
                  className="w-full"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete all projects"}
                </Button>
              </DialogClose>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {loading ? (
        <div>Loading projects...</div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="projects">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="cardGroup"
              >
                {projects.map((project: ProjectData, index: number) => (
                  <Draggable
                    key={project._id}
                    draggableId={project._id}
                    index={index}
                  >
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="mb-4"
                      >
                        <CardHeader className="flex flex-row items-center justify-between">
                          <div className="flex items-center justify-center gap-1">
                            <div
                              {...provided.dragHandleProps}
                              className="flex h-full cursor-move items-center justify-center"
                            >
                              <GripVertical className="h-5 w-5 text-gray-400" />
                            </div>
                            <CardTitle className="h-full items-center justify-center text-sm">
                              {project.title}
                            </CardTitle>
                          </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <span className="flex h-full items-center justify-center text-[var(--headline)]">
                                <MoreHorizontal className="h-4 w-4 cursor-pointer" />
                              </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[var(--background)] text-[var(--headline)]">
                              <Link to={`/admin/project/edit/${project._id}`}>
                                <DropdownMenuItem
                                  className={styles.dropdownMenuItem}
                                >
                                  <span>Edit</span>
                                  <EditIcon className="h-4 w-4" />
                                </DropdownMenuItem>
                              </Link>
                              <DropdownMenuItem
                                onClick={() => deleteProject(project._id)}
                                className={styles.dropdownMenuItem}
                              >
                                <span>Delete</span>
                                <Trash2 className="h-4 w-4" />
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            {project.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <div className="flex flex-wrap gap-2 py-2">
                            {project.badge?.map((badge) => (
                              <Badge key={badge}>{badge}</Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            {project.visitWebsite && (
                              <a
                                href={project.visitWebsite}
                                className={styles.linkStyle}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span>Website</span>
                                <Globe className="h-4 w-4" />
                              </a>
                            )}
                            {project.visitGithub && (
                              <a
                                href={project.visitGithub}
                                className={styles.linkStyle}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span>Github</span>
                                <ImGithub className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}
