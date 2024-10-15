import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { ArrowLeft, Globe, Plus, PlusIcon } from "lucide-react";
import { ImGithub } from "react-icons/im";
import { useNavigate } from "react-router-dom";
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
import { toast } from "sonner";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { endpoints } from "@/API/API";

const AddProject = () => {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [githubUrl, setGithubUrl] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [selectedBadge, setSelectedBadge] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [badges, setBadges] = useState<string[]>([]);
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(endpoints.getProjectOptions);
        setOptions(response.data);
      } catch (error) {
        toast.error("Failed to fetch options.");
      }
    };

    fetchOptions();
  }, []);

  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (badges.length === 0) {
      toast.error("Please add at least one badge before submitting.");
      return;
    }
    try {
      const res = await axios.post(endpoints.addProject, {
        title: projectName,
        description: projectDescription,
        links: [
          {
            website: websiteUrl,
            github: githubUrl,
          },
        ],
        option: [selectedOption],
        badge: badges,
      });
      if (res.status === 200) {
        setProjectName("");
        setProjectDescription("");
        setGithubUrl("");
        setWebsiteUrl("");
        setSelectedOption("");
        setBadges([]);

        toast.success("Project added successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const addBadge = () => {
    if (selectedBadge && !badges.includes(selectedBadge)) {
      setBadges((prevBadges) => [...prevBadges, selectedBadge]);
      setSelectedBadge("");
      toast.success("Badge added successfully");
    } else if (badges.includes(selectedBadge)) {
      toast.error("this badge is already exist");
    } else {
      toast.error("add badge please");
    }
  };

  return (
    <div>
      <PageTitle title={PageTitlesData.addProject} />

      <span dir="ltr" onClick={() => navigate(-1)}>
        <ArrowLeft className="hoverd h-6 w-6 cursor-pointer text-[var(--paragraph)] hover:text-[var(--headline)]" />
      </span>

      <h1 className="section-title">Add a new project</h1>

      <form onSubmit={addProject} className="flex flex-col gap-5">
        <Input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project name"
        />
        <Textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Project description"
        />

        <div className="inputWithIcon">
          <ImGithub className="h-5 w-5" />
          <Input
            value={githubUrl}
            type="url"
            onChange={(e) => setGithubUrl(e.target.value)}
            className="border-none"
            placeholder="https://github.com/"
          />
        </div>

        <div className="inputWithIcon">
          <Globe className="h-5 w-5" />
          <Input
            value={websiteUrl}
            type="url"
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="border-none"
            placeholder="https://website.com/"
          />
        </div>

        <Select value={selectedOption} onValueChange={setSelectedOption}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-[var(--card-background)] p-2 text-center text-xs text-[var(--headline)]">
                <Plus className="h-4 w-4" />
                <span>Add Badge</span>
              </div>
            </DialogTrigger>
            <DialogContent className="border-none bg-[var(--card-background)] text-center sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="py-4 text-center text-[var(--headline)]">
                  Add a new badge
                </DialogTitle>
                <DialogDescription className="text-center">
                  <Input
                    placeholder="Badge name"
                    className="border"
                    value={selectedBadge}
                    onChange={(e) => setSelectedBadge(e.target.value)}
                  />
                </DialogDescription>
              </DialogHeader>

              <div className="flex w-full items-center justify-center gap-4 py-4">
                <Button
                  onClick={addBadge}
                  className="flex items-center justify-center"
                >
                  <span>
                    <PlusIcon />
                  </span>
                  <span>Add badge</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex gap-2 text-white">
            {badges.map((badge, index) => (
              <Badge key={index}>
                <span>{badge}</span>
                <HiXMark
                  className="cursor-pointer"
                  onClick={() => setBadges(badges.filter((b) => b !== badge))}
                />
              </Badge>
            ))}
          </div>
        </div>

        <Button onClick={addProject} type="submit" className="my-4">
          Add project
        </Button>
      </form>
    </div>
  );
};

export default AddProject;
