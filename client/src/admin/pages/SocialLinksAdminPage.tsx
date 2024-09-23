import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const SocialLinksAdminPage = () => {
  const styles = {
    input:
      "flex items-center justify-start gap-1 rounded-md border-2 border-[var(--input-border-color)] bg-[var(--card-background)] px-2 text-[var(--paragraph)]",
  };

  return (
    <div>
      <PageTitle title={PageTitlesData.adminSocialLinks} />
      <div className="">
        <h1 className="section-title">Social links</h1>

        <form className="flex flex-col gap-4">
          <div className={styles.input}>
            <FaLinkedin className="h-5 w-5" />

            <Input
              className="border-none"
              placeholder="https://linkedin.com/"
            />
          </div>

          <div className={styles.input}>
            <FaGithub className="h-5 w-5" />

            <Input className="border-none" placeholder="https://github.com/" />
          </div>

          <div className={styles.input}>
            <FaWhatsapp className="h-5 w-5" />

            <Input className="border-none" placeholder="059xxxxxxx" />
          </div>

          <div className={styles.input}>
            <FaYoutube className="h-5 w-5" />

            <Input className="border-none" placeholder="https://youtube.com/" />
          </div>

          <Button className="w-max">Save Changes</Button>
        </form>
      </div>
      ;
    </div>
  );
};

export default SocialLinksAdminPage;
