/* eslint-disable @typescript-eslint/no-explicit-any */
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
      <Tabs defaultValue="english" className="w-full">
        <header className="mb-4 flex w-full items-center justify-between">
          <h1 className="section-title">Content</h1>
          <TabsList>
            <TabsTrigger value="english">English</TabsTrigger>
            <TabsTrigger value="arabic">العربية</TabsTrigger>
          </TabsList>
        </header>

        <TabsContent value="english">
          <ContentEditor lang="en" styles={styles} />
        </TabsContent>

        <TabsContent value="arabic">
          <ContentEditor lang="ar" styles={styles} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ContentEditor({ styles }: { lang: "en" | "ar"; styles: any }) {
  return (
    <Tabs defaultValue="hero" className="w-full">
      <TabsList>
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>

      <TabsContent value="hero">
        <div className={styles.contentSection}>
          <div className="w-full">
            <p className={styles.inputTitle}>Hero section title</p>
            <Input />
          </div>

          <div className="w-full">
            <p className={styles.inputTitle}>Hero section subtitle</p>
            <Input />
          </div>

          <div className="w-full">
            <p className={styles.inputTitle}>Hero section description</p>
            <Textarea className="min-h-52" />
          </div>

          <Button>Save changes</Button>
        </div>
      </TabsContent>

      <TabsContent value="projects">
        <div className={styles.contentSection}>
          <div className="w-full">
            <p className={styles.inputTitle}>Projects section title</p>
            <Input />
          </div>

          <div className="w-full">
            <p className={styles.inputTitle}>Projects section description</p>
            <Textarea />
          </div>

          <Button>Save changes</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
