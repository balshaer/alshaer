import { endpoints } from "@/API/API";
import CompactNumber from "@/components/featuers/CompactNumber";
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
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import axios from "axios";
import { Plus, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SocialLinksAdminPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [otp, setOtp] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [socialLinks, setSocialLinks] = useState<any[]>([]);
  const [newLink, setNewLink] = useState<{ name: string; link: string }>({
    name: "",
    link: "",
  });

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const res = await axios.get(endpoints.getSocialLinks);
        setSocialLinks(res.data);
      } catch (error) {
        console.error("Error fetching social links:", error);
        toast.error("Failed to fetch social links.");
      }
    };

    fetchSocialLinks();
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewLink((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for adding new social link
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(endpoints.addSocialLink, newLink);
      setSocialLinks((prev) => [...prev, res.data]);
      setNewLink({ name: "", link: "" });
      toast("Social link added successfully!");
    } catch (error) {
      console.error("Error adding social link:", error);
      toast.error("Failed to add social link.");
    }
  };

  // Handle delete single link
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${endpoints.deleteSocialLink}${id}`);
      setSocialLinks((prev) => prev.filter((link) => link._id !== id));
      toast("Social link deleted successfully!");
    } catch (error) {
      console.error("Error deleting social link:", error);
      toast.error("Failed to delete social link.");
    }
  };

  // Handle delete all links
  const handleDeleteAll = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(endpoints.deleteAllSocialLinks);
      setSocialLinks([]);
      toast.success("All links deleted successfully");
    } catch (error) {
      console.error("Error deleting all links:", error);
      toast.error("Failed to delete all links.");
    } finally {
      setIsDeleting(false);
      setIsDialogOpen(false);
    }
  };

  return (
    <div>
      <PageTitle title={PageTitlesData.adminSocialLinks} />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="border-none bg-[var(--card-background)] text-center sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="py-4 text-center text-[var(--headline)]">
              Delete All Links
            </DialogTitle>
            <DialogDescription className="text-center">
              Are you sure you want to delete all links?
            </DialogDescription>
          </DialogHeader>

          <div className="flex w-full items-center justify-center gap-4 py-4">
            <Button
              onClick={handleDeleteAll}
              className="w-full"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Yes, delete all links"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <header className="flex items-center justify-between">
        <div className="section-title flex flex-row gap-1">
          <span>Social links</span>
          <span className="flex items-center justify-center">
            (<CompactNumber value={socialLinks.length} />)
          </span>
        </div>

        <div className="flex gap-2">
          <Trash2Icon
            className="sectionIcon"
            onClick={() => setIsDialogOpen(true)}
          />
          <Dialog>
            <DialogTrigger>
              <Plus className="sectionIcon" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a new social link</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <Input
                  name="name"
                  value={newLink.name}
                  onChange={handleInputChange}
                  placeholder="Social Link Name (e.g., GitHub)"
                />
                <Input
                  name="link"
                  value={newLink.link}
                  onChange={handleInputChange}
                  placeholder="https://link.com"
                />
                <Button type="submit">Add Link</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <form>
        {socialLinks.map((link) => (
          <div key={link._id} className="inputWithIcon">
            <span>{link.name}</span>
            <Input value={link.link} readOnly />
            <Trash2Icon
              className="sectionIcon"
              onClick={() => handleDelete(link._id)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default SocialLinksAdminPage;
