import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { ArrowLeft, Globe, Plus, PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiXMark } from "react-icons/hi2";

const AddExperience = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageTitle title={PageTitlesData.addExperience} />

      <button onClick={() => navigate(-1)}>
        <ArrowLeft className="hoverd h-6 w-6 text-[var(--paragraph)] hover:text-[var(--headline)]" />
      </button>

      <h1 className="section-title">Add a new experience</h1>

      <form className="flex flex-col gap-5">
        <Input placeholder="job role" />
        <Input placeholder="company name" />
        <Textarea placeholder="job description" />

        <div className="inputWithIcon">
          <Globe className="h-5 w-5" />

          <Input placeholder="https://companyWebsite.com/" />
        </div>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-[var(--card-background)] p-2 text-center text-xs text-[var(--headline)]">
                <Plus className="h-4 w-4" />
                <span>add badge</span>
              </div>
            </DialogTrigger>
            <DialogContent className="border-none bg-[var(--card-background)] text-center sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="py-4 text-center text-[var(--headline)]">
                  Add a new badge
                </DialogTitle>
                <DialogDescription className="text-center">
                  <Input placeholder="badge name " className="border" />
                </DialogDescription>
              </DialogHeader>

              <div className="flex w-full items-center justify-center gap-4 py-4">
                <Button className="flex items-center justify-center">
                  <span>
                    <PlusIcon />
                  </span>
                  <span>add badge</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex gap-2">
            <Badge>
              <span>text</span>
              <HiXMark className="badgeIcon" />
            </Badge>
            <Badge>
              <span>text</span>
              <HiXMark className="badgeIcon" />
            </Badge>
          </div>
        </div>

        <Button className="my-4 w-full">Add project</Button>
      </form>
    </div>
  );
};

export default AddExperience;
