import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function ContentAdminPage() {
  const styles = {
    inputTitle: "text-[var(--paragraph)]",
    contentSection: "flex w-full flex-col items-start justify-start gap-4 py-4",
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="hero" className="w-full">
        <header className="flex w-full items-center justify-between">
          <h1 className="section-title">Content</h1>

          <TabsList className="flex gap-4">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
        </header>

        <TabsContent value="hero">
          <div className={styles.contentSection}>
            <div className="w-full">
              <p className={styles.inputTitle}>Hero title</p>
              <Input />
            </div>

            <div className="w-full">
              <p className={styles.inputTitle}>Hero subtitle</p>
              <Input />
            </div>

            <div className="w-full">
              <p className={styles.inputTitle}>Hero section</p>
              <Textarea className="min-h-52" />
            </div>

            <Button>Save changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className={styles.contentSection}>
            <div className="w-full">
              <p className={styles.inputTitle}>Projects title</p>
              <Input />
            </div>

            <div className="w-full">
              <p className={styles.inputTitle}>Projects subtitle</p>
              <Input />
            </div>

            <Button>Save changes</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
