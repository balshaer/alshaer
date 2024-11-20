import { endpoints } from "@/API/API"; // Adjust the path if necessary
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const SocialLinksAdminPage = () => {
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "", // Ensure all fields are initialized as empty strings
    github: "",
    phone: "",
    youtube: "",
  });

  const styles = {
    input:
      "flex items-center justify-start gap-1 rounded-md border-2 border-[var(--input-border-color)] bg-[var(--card-background)] px-2 text-[var(--paragraph)]",
  };

  // Fetch existing social links when the component mounts
  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const res = await axios.get(endpoints.getSocialLinks);
        setSocialLinks(res.data.socialLinks);
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({ ...prevLinks, [name]: value }));
  };

  // Validate the social links before submitting
  const validateSocialLinks = (links) => {
    for (const [key, value] of Object.entries(links)) {
      // Check if the value is a valid string and not an empty string or numeric
      if (
        typeof value !== "string" ||
        value.trim() === "" ||
        !isNaN(Number(value))
      ) {
        console.error(`${key} must be a valid string and not a number`);
        return false;
      }
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateSocialLinks(socialLinks)) {
      return;
    }

    try {
      const response = await axios.put(
        endpoints.updateSocialLinks,
        socialLinks,
      );
      console.log("Social links updated successfully:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error updating social links:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
      <div>
        <h1 className="section-title">Social links</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className={styles.input}>
            <FaLinkedin className="h-5 w-5" />
            <Input
              name="linkedin"
              className="border-none"
              placeholder="https://linkedin.com/"
              value={socialLinks.linkedin}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.input}>
            <FaGithub className="h-5 w-5" />
            <Input
              name="github"
              className="border-none"
              placeholder="https://github.com/"
              value={socialLinks.github}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.input}>
            <FaWhatsapp className="h-5 w-5" />
            <Input
              name="phone"
              className="border-none"
              placeholder="059xxxxxxx"
              value={socialLinks.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.input}>
            <FaYoutube className="h-5 w-5" />
            <Input
              name="youtube"
              className="border-none"
              placeholder="https://youtube.com/"
              value={socialLinks.youtube}
              onChange={handleInputChange}
            />
          </div>

          <Button className="w-max">Save Changes</Button>
        </form>
      </div>
  );
};

export default SocialLinksAdminPage;
