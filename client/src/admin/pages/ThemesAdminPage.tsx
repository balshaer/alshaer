"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ThemesAdminPage = () => {
  return (
    <div className="">
      <PageTitle title={PageTitlesData.adminThemes} />

      <Tabs defaultValue="dark" className="w-full">
        <div className="mb-4 flex w-full items-center justify-between">
          <h1 className="section-title">Themes</h1>
          <TabsList className="flex gap-4 bg-[var(--card-background)]">
            <TabsTrigger value="dark">Dark mode</TabsTrigger>
            <TabsTrigger value="light">Light mode</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="dark">
          <ThemeForm mode="Dark" />
        </TabsContent>
        <TabsContent value="light">
          <ThemeForm mode="Light" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ThemeForm = ({ mode }: { mode: "Dark" | "Light" }) => {
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-max w-full rounded-lg border border-[var(--border)] p-4"
    >
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[var(--headline)]">
          {mode} mode
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Plus className="adminSectionIcon" />
          </DialogTrigger>
          <DialogContent>
            <Input placeholder="Enter new color name" />
          </DialogContent>
        </Dialog>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ColorInput label="Headline" />
        <ColorInput label="Subheadline" />
        <ColorInput label="Body Text" />
        <ColorInput label="Primary" />
        <ColorInput label="Secondary" />
        <ColorInput label="Accent" />
        <ColorInput label="Background" />
        <ColorInput label="Card Background" />
        <ColorInput label="Border" />
      </div>
    </motion.form>
  );
};

const ColorInput = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="text-xs font-medium text-[var(--paragraph)]"
      >
        {label}
      </label>
      <Input
        id={label.toLowerCase().replace(" ", "-")}
        placeholder="Color value"
        defaultValue="#000000"
      />
    </div>
  );
};

export default ThemesAdminPage;
