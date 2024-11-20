import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Globe, Plus } from "lucide-react";
import { ImGithub } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { HiXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { endpoints } from "@/API/API";

interface Project {
  title: string;
  description: string;
  links: {
    website: string;
    github: string;
  }[];
  badges: string[];
}

const EditProject = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project>({
    title: "",
    description: "",
    links: [{ website: "", github: "" }],
    badges: [],
  });

  const [newBadge, setNewBadge] = useState("");

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${endpoints.getProjectById}${id}`);
        setProject({
          title: response.data.title,
          description: response.data.description,
          links: response.data.links || [{ website: "", github: "" }],
          badges: Array.isArray(response.data.badge) ? response.data.badge : [],
        });
      } catch (error) {
        console.error("Failed to fetch project:", error);
      }
    };

    fetchProject();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleLinksChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setProject((prev) => {
      const updatedLinks = [...prev.links];
      updatedLinks[index] = { ...updatedLinks[index], [name]: value };
      return { ...prev, links: updatedLinks };
    });
  };

  const handleBadgeAdd = () => {
    if (newBadge) {
      setProject((prev) => ({
        ...prev,
        badges: [...prev.badges, newBadge],
      }));
      setNewBadge("");
    }
  };

  const handleBadgeRemove = (badgeToRemove: string) => {
    setProject((prev) => ({
      ...prev,
      badges: prev.badges.filter((badge) => badge !== badgeToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!project.title.trim() || !project.description.trim()) {
      console.error("Name and description are required.");
      return;
    }

    const validBadges = project.badges.filter((badge) => badge.trim() !== "");
    const dataToSubmit = {
      title: project.title.trim(),
      description: project.description.trim(),
      links: project.links.map((link) => ({
        website: link.website.trim(),
        github: link.github.trim(),
      })),
      badge: validBadges,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/project/${id}`,
        dataToSubmit,
      );

      console.log("Project updated successfully", response.data);
      if (response.status === 200) {
        navigate("/admin/projects");
      } else {
        throw new Error("Failed to update project");
      }
    } catch (error) {
      console.error("Error updating project:" + error);
    }
  };

  return (
    <div>
      {/* <PageTitle title={PageTitlesData.editProject} /> */}

      <header dir="ltr">
        <span className="cursor-pointer" onClick={() => navigate(-1)}>
          <ArrowLeft className="hoverd h-6 w-6 text-[var(--paragraph)] hover:text-[var(--headline)]" />
        </span>
      </header>

      <h1 className="section-title">Edit Project</h1>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Input
          name="title"
          value={project.title}
          onChange={handleInputChange}
          placeholder="Project Name"
        />

        <Textarea
          name="description"
          value={project.description}
          onChange={handleInputChange}
          placeholder="Project Description"
        />

        {project.links.map((link, index) => (
          <div key={index} className="flex gap-4">
            <div className="inputWithIcon">
              <Globe className="h-5 w-5" />
              <Input
                className="w-max min-w-80 border-none"
                name="website"
                value={link.website}
                onChange={(e) => handleLinksChange(index, e)}
                placeholder="Website URL"
              />
            </div>
            <div className="inputWithIcon">
              <ImGithub className="h-5 w-5" />
              <Input
                className="border-none"
                name="github"
                value={link.github}
                onChange={(e) => handleLinksChange(index, e)}
                placeholder="GitHub URL"
              />
            </div>
          </div>
        ))}

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-[var(--card-background)] p-2 text-center text-xs text-[var(--headline)]">
                <Plus className="h-4 w-4" />
                <span>Add Badge</span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Badge</DialogTitle>
                <DialogDescription>
                  Enter a badge to add to your project.
                </DialogDescription>
              </DialogHeader>
              <Input
                value={newBadge}
                onChange={(e) => setNewBadge(e.target.value)}
                placeholder="Enter badge name"
              />
              <div className="flex justify-end">
                <Button onClick={handleBadgeAdd}>Add</Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex flex-wrap gap-2">
            {Array.isArray(project.badges) && project.badges.length > 0 ? (
              project.badges.map((badge) => (
                <Badge key={badge} onClick={() => handleBadgeRemove(badge)}>
                  {badge}
                  <HiXMark className="ml-2 cursor-pointer" />
                </Badge>
              ))
            ) : (
              <span className="text-sm text-[var(--paragraph)]">
                No badges added
              </span>
            )}
          </div>
        </div>

        <Button type="submit">Update Project</Button>
      </form>
    </div>
  );
};

export default EditProject;
