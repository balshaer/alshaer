import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

const ThemesAdminPage = () => {
  return (
    <div>
      <PageTitle title={PageTitlesData.adminThemes} />

      <Tabs defaultValue="dark" className="w-full">
        <div className="mb-4 flex w-full items-center justify-between">
          <h1 className="section-title">Themes</h1>
          <TabsList className="flex gap-4">
            <TabsTrigger className="p-2" value="dark">
              Dark mode
            </TabsTrigger>
            <TabsTrigger className="p-2" value="light">
              Light mode
            </TabsTrigger>
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
  const [colorValues, setColorValues] = useState({
    headline: "#fffffe",
    subheadline: "#94a1b2",
    bodyText: "#94a1b2",
    primary: "#7f5af0",
    secondary: "#5b36cc",
    accent: "#fffffe",
    background: mode === "Dark" ? "#16161a" : "#f9f9f9",
    cardBackground: mode === "Dark" ? "#242629" : "#edf0f1",
    border: mode === "Dark" ? "#719dba7a" : "#000000",
  });

  const [newColor, setNewColor] = useState({ name: "", value: "#000000" });

  const handleAddColor = () => {
    setColorValues((prev) => ({
      ...prev,
      [newColor.name]: newColor.value,
    }));
    setNewColor({ name: "", value: "#000000" }); // Reset
  };

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
            <Plus className="sectionIcon" />
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center font-bold text-[var(--headline)]">
                Add theme color
              </DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Color name"
              value={newColor.name}
              onChange={(e) => setNewColor({ ...newColor, name: e.target.value })}
            />
            <Input
              type="color"
              value={newColor.value}
              onChange={(e) => setNewColor({ ...newColor, value: e.target.value })}
            />
            <DialogClose className="w-full">
              <Button className="w-full" onClick={handleAddColor}>
                Add color
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(colorValues).map(([key, value]) => (
          <ColorInput
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={value}
            onChange={(newColorValue) => setColorValues((prev) => ({ ...prev, [key]: newColorValue }))}
          />
        ))}
      </div>
    </motion.form>
  );
};

const ColorInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (color: string) => void;
}) => {
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Color value"
      />
    </div>
  );
};

export default ThemesAdminPage;
