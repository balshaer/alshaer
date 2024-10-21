import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Badge } from "@/components/ui/badge";
import { PageTitle } from "@/helper";
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
import { endpoints } from "@/API/API";
import CompactNumber from "@/components/featuers/CompactNumber";

interface WorkData {
  _id: string;
  title: string;
  description: string;
  badge?: string[];
  visitWebsite?: string;
  archived: boolean;
  order: number;
}

export default function WorkAdminPage() {
  const [otp, setOtp] = useState(false);
  const [works, setWorks] = useState<WorkData[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      const response = await axios.get(endpoints.getUnArchivedWorks);
      setWorks(
        response.data.sort((a: WorkData, b: WorkData) => a.order - b.order),
      );
    } catch (error) {
      console.error("Error fetching works:", error);
      toast.error("Failed to fetch works");
    }
  };

  const handleDeleteWork = async (id: string) => {
    try {
      await axios.post(`${endpoints.archiveWork}${id}`);
      toast.success("Work deleted successfully");
      fetchWorks();
    } catch (error) {
      console.error("Error deleting work:", error);
      toast.error("Failed to delete work");
    }
  };

  const handleDeleteAllWorks = async () => {
    try {
      setIsDeleting(true);
      await axios.post(endpoints.archiveAllWork);
      toast.success("All works deleted successfully");
      setWorks([]);
    } catch (error) {
      console.error("Error deleting all works:", error);
      toast.error("Failed to delete all works");
    } finally {
      setIsDeleting(false);
      setIsDialogOpen(false);
    }
  };

  const onDragEnd = async (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(works);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedWorks = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setWorks(updatedWorks);

    try {
      await axios.post(endpoints.updateWorkOrder, { works: updatedWorks });
      toast.success("Work order updated successfully");
    } catch (error) {
      console.error("Error updating work order:", error);
      toast.error("Failed to update work order");
    }
  };

  const styles = {
    dropdownMenuItem: "flex items-center justify-end gap-2 cursor-pointer",
    linkStyle:
      "flex cursor-pointer items-center gap-2 hover:text-[var(--headline)] text-sm",
  };

  return (
    <div>
      <PageTitle title="Work" />
      <header className="flex items-center justify-between">
        <div className="section-title flex flex-row gap-1">
          <span>Work</span>
          <span className="flex items-center justify-center">
            (<CompactNumber value={works.length.toString()} />)
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="flex h-full items-center justify-center text-[var(--headline)]">
              <Settings className="sectionIcon" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[var(--card-background)] text-[var(--headline)]">
            <Link className="w-full" to="/admin/works/add">
              <DropdownMenuItem className={styles.dropdownMenuItem}>
                <span>Add a new Work</span>
                <Plus className="dropdownMenuItemIcon" />
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              onClick={() => setIsDialogOpen(true)}
              className={styles.dropdownMenuItem}
            >
              <span>Delete all Work</span>
              <Trash2 className="dropdownMenuItemIcon" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="border-none bg-[var(--card-background)] text-center sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="py-4 text-center text-[var(--headline)]">
              Delete All Works
            </DialogTitle>
            <DialogDescription className="text-center">
              Are you sure you want to delete all Works?
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
                  onClick={handleDeleteAllWorks}
                  className="w-full"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete all Works"}
                </Button>
              </DialogClose>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="works">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="cardGroup"
            >
              {works.map((work: WorkData, index: number) => (
                <Draggable key={work._id} draggableId={work._id} index={index}>
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="mb-4"
                    >
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div
                          {...provided.dragHandleProps}
                          className="cursor-move"
                        >
                          <GripVertical className="h-5 w-5 text-gray-400" />
                        </div>
                        <CardTitle>{work.title}</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <span className="flex h-full items-center justify-center text-[var(--headline)]">
                              <MoreHorizontal className="h-4 w-4 cursor-pointer" />
                            </span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-[var(--background)] text-[var(--headline)]">
                            <Link to={`/admin/works/edit/${work._id}`}>
                              <DropdownMenuItem
                                className={styles.dropdownMenuItem}
                              >
                                <span>Edit</span>
                                <EditIcon className="h-4 w-4" />
                              </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem
                              onClick={() => handleDeleteWork(work._id)}
                              className={styles.dropdownMenuItem}
                            >
                              <span>Delete</span>
                              <Trash2 className="h-4 w-4" />
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{work.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        {work.visitWebsite && (
                          <a
                            href={work.visitWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkStyle}
                          >
                            <Globe className="h-4 w-4" />
                            Visit Website
                          </a>
                        )}

                        {work.badge && (
                          <div className="flex flex-wrap gap-2">
                            {work.badge.map((badge) => (
                              <Badge
                                className="flex-wrap"
                                key={badge}
                                variant="default"
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        )}
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
    </div>
  );
}
