import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { ArrowLeft, Globe, Plus, PlusIcon } from "lucide-react";
import { HiXMark } from "react-icons/hi2";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { endpoints } from "@/API/API";

interface WorkData {
  title: string;
  description: string;
  company: string;
  links: { website: string }[];
  badge: string[];
  date: { startDate: string | null; endDate: string | null }[];
  archived: boolean;
}

export default function AddWork() {
  const navigate = useNavigate();

  const [workData, setWorkData] = useState<WorkData>({
    title: "",
    description: "",
    company: "",
    links: [{ website: "" }],
    badge: [],
    date: [{ startDate: null, endDate: null }],
    archived: false,
  });

  const [selectedBadge, setSelectedBadge] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const clearForm = () => {
    setWorkData({
      title: "",
      company: "",
      description: "",
      links: [{ website: "" }],
      badge: [],
      date: [{ startDate: "", endDate: "" }],
      archived: false,
    });
    setSelectedBadge("");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    workData.date.forEach((date, index) => {
      if (
        date.startDate &&
        date.endDate &&
        new Date(date.startDate) > new Date(date.endDate)
      ) {
        newErrors[`date${index}`] = "Start date must be before end date";
      }
    });

    workData.links.forEach((link, index) => {
      if (link.website && !isValidUrl(link.website)) {
        newErrors[`website${index}`] = "Invalid URL format";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setWorkData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (
    index: number,
    field: "startDate" | "endDate",
    value: string | null,
  ) => {
    const newDates = [...workData.date];
    newDates[index] = { ...newDates[index], [field]: value || null };
    setWorkData((prev) => ({ ...prev, date: newDates }));
  };

  const handleWebsiteChange = (index: number, value: string) => {
    const newLinks = [...workData.links];
    newLinks[index] = { website: value };
    setWorkData((prev) => ({ ...prev, links: newLinks }));
  };

  const addBadge = () => {
    if (selectedBadge && !workData.badge.includes(selectedBadge)) {
      setWorkData((prev) => ({
        ...prev,
        badge: [...prev.badge, selectedBadge],
      }));
      setSelectedBadge("");
      toast.success("Badge added successfully");
    } else if (workData.badge.includes(selectedBadge)) {
      toast.error("This badge already exists");
    } else {
      toast.error("Please add a badge");
    }
  };

  const removeBadge = (badgeToRemove: string) => {
    setWorkData((prev) => ({
      ...prev,
      badge: prev.badge.filter((badge) => badge !== badgeToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form before submission
    if (!validateForm()) return;

    try {
      const res = await axios.post(endpoints.addWork, workData);
      if (res.status === 200) {
        clearForm();
        toast.success("Experience added successfully");
      }
    } catch (error) {
      let errorMessage = "An error occurred";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || "An error occurred";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
      console.error("Error adding work:", error);
    }
  };

  console.log(workData);

  return (
    <div className="section">
      {/* <PageTitle title={PageTitlesData.addExperience} /> */}

      <span dir="ltr" onClick={() => navigate(-1)}>
        <ArrowLeft className="hoverd h-6 w-6 cursor-pointer text-[var(--paragraph)] hover:text-[var(--headline)]" />
      </span>
      <h1 className="section-title">Add a new experience</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="flex w-full gap-4 max-md:flex-col">
          <div className="w-full">
            <Input
              name="title"
              value={workData.title}
              onChange={handleInputChange}
              placeholder="Experience title"
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div className="w-full">
            <Input
              name="company"
              value={workData.company}
              onChange={handleInputChange}
              placeholder="company name"
              className={errors.company ? "border-red-500" : ""}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>
        </div>

        <div>
          <Textarea
            name="description"
            value={workData.description}
            onChange={handleInputChange}
            placeholder="Experience description"
            className={errors.description ? "border-red-500" : ""}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description}</p>
          )}
        </div>

        {workData.date.map((date, index) => (
          <div key={index} className="flex gap-4 max-md:flex-col">
            <div className="flex-1">
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
                className={errors[`date${index}`] ? "border-red-500" : ""}
              />
            </div>
            <div className="flex-1">
              <Input
                type="date"
                value={
                  date.endDate
                    ? new Date(date.endDate).toISOString().substring(0, 10)
                    : ""
                } // Convert to YYYY-MM-DD format
                onChange={(e) =>
                  handleDateChange(index, "endDate", e.target.value)
                }
                placeholder="End Date"
                className={errors[`date${index}`] ? "border-red-500" : ""}
              />
            </div>
          </div>
        ))}

        {errors.date && (
          <p className="mt-1 text-sm text-red-500">{errors.date}</p>
        )}

        {workData.links.map((link, index) => (
          <div key={index} className="inputWithIcon">
            <Globe className="mr-2 h-5 w-5 text-[var(--paragraph)]" />
            <Input
              value={link.website}
              type="url"
              onChange={(e) => handleWebsiteChange(index, e.target.value)}
              placeholder="https://website.com/"
              className={
                errors[`website${index}`] ? "border-red-500" : "border-none"
              }
            />
          </div>
        ))}

        <div className="flex flex-wrap items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-[var(--card-background)] p-2 text-center text-xs text-[var(--headline)]">
                <Plus className="h-4 w-4" />
                <span>Add Badge</span>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add a new badge</DialogTitle>
                <DialogDescription>
                  Enter the name of the badge you want to add to your
                  experience.
                </DialogDescription>
              </DialogHeader>
              <Input
                placeholder="Badge name"
                value={selectedBadge}
                onChange={(e) => setSelectedBadge(e.target.value)}
              />
              <Button onClick={addBadge} className="w-full">
                <PlusIcon className="mr-2 h-4 w-4" />
                Add badge
              </Button>
            </DialogContent>
          </Dialog>

          <div className="flex flex-wrap gap-2">
            {workData.badge.map((badge, index) => (
              <Badge key={index} className="flex items-center gap-1">
                {badge}
                <button
                  onClick={() => removeBadge(badge)}
                  className="ml-1 rounded-full p-1 hover:bg-[var(--accent-2)]"
                >
                  <HiXMark className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full">
          Add experience
        </Button>
      </form>
    </div>
  );
}
