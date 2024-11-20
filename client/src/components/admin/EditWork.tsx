import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Globe, Plus } from "lucide-react";
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

interface Work {
  title: string;
  description: string;
  links: {
    website: string;
  }[];
  badges: string[];
  dates: {
    startDate: string | null;
    endDate: string | null;
  }[];
}

const EditWork = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [work, setWork] = useState<Work>({
    title: "",
    description: "",
    links: [{ website: "" }],
    badges: [],
    dates: [{ startDate: null, endDate: null }],
  });

  const [newBadge, setNewBadge] = useState("");

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await axios.get(`${endpoints.getWorkById}${id}`);
        setWork({
          title: response.data.title,
          description: response.data.description,
          links: response.data.links || [{ website: "" }],
          badges: Array.isArray(response.data.badge) ? response.data.badge : [],
          dates: response.data.dates || [{ startDate: null, endDate: null }],
        });
      } catch (error) {
        console.error("Failed to fetch work:", error);
      }
    };

    fetchWork();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setWork((prev) => ({ ...prev, [name]: value }));
  };

  const handleLinksChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setWork((prev) => {
      const updatedLinks = [...prev.links];
      updatedLinks[index] = { ...updatedLinks[index], [name]: value };
      return { ...prev, links: updatedLinks };
    });
  };

  const handleBadgeAdd = () => {
    if (newBadge) {
      setWork((prev) => ({
        ...prev,
        badges: [...prev.badges, newBadge],
      }));
      setNewBadge("");
    }
  };

  const handleBadgeRemove = (badgeToRemove: string) => {
    setWork((prev) => ({
      ...prev,
      badges: prev.badges.filter((badge) => badge !== badgeToRemove),
    }));
  };

  const handleDateChange = (
    index: number,
    field: "startDate" | "endDate",
    value: string,
  ) => {
    const updatedDates = [...work.dates];
    updatedDates[index][field] = value || null;
    setWork((prev) => ({ ...prev, dates: updatedDates }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!work.title.trim() || !work.description.trim()) {
      console.error("Title and description are required.");
      return;
    }

    const dataToSubmit = {
      title: work.title.trim(),
      description: work.description.trim(),
    };

    console.log("Data to submit:", dataToSubmit);

    try {
      const response = await axios.put(
        `${endpoints.updateWork}${id}`,
        dataToSubmit,
      );

      console.log("Work updated successfully", response.data);
      if (response.status === 200) {
        navigate("/admin/works");
      } else {
        throw new Error("Failed to update work");
      }
    } catch (error) {
      console.error("Error updating work:" + error);
    }
  };

  return (
    <div>
      {/* <PageTitle title={PageTitlesData.editExperience} /> */}

      <header dir="ltr">
        <span className="cursor-pointer" onClick={() => navigate(-1)}>
          <ArrowLeft className="hoverd h-6 w-6 text-[var(--paragraph)] hover:text-[var(--headline)]" />
        </span>
      </header>

      <h1 className="section-title">Edit Work</h1>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Input
          name="title"
          value={work.title}
          onChange={handleInputChange}
          placeholder="Work Name"
        />

        <Textarea
          name="description"
          value={work.description}
          onChange={handleInputChange}
          placeholder="Work Description"
        />

        {work.links.map((link, index) => (
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
          </div>
        ))}

        {work.dates.map((date, index) => (
          <div key={index} className="flex gap-4">
            <Input
              type="date"
              value={
                date.startDate
                  ? new Date(date.startDate).toISOString().substring(0, 10)
                  : ""
              }
              onChange={(e) =>
                handleDateChange(index, "startDate", e.target.value)
              }
              placeholder="Start Date"
            />
            <Input
              type="date"
              value={
                date.endDate
                  ? new Date(date.endDate).toISOString().substring(0, 10)
                  : ""
              }
              onChange={(e) =>
                handleDateChange(index, "endDate", e.target.value)
              }
              placeholder="End Date"
            />
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
                  Enter a badge to add to your work.
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
            {Array.isArray(work.badges) && work.badges.length > 0 ? (
              work.badges.map((badge) => (
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

        <Button type="submit">Update Work</Button>
      </form>
    </div>
  );
};

export default EditWork;
