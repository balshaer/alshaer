import React, { useState } from "react";
import emailjs from "emailjs-com";
import { cn } from "@/lib/utils";
import { Button } from "@/core/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/core/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/core/components/ui/drawer";
import { Input } from "@/core/components/ui/input";
import { useMediaQuery } from "@react-hook/media-query";
import { Textarea } from "@/core/components/ui/textarea";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import ButtonDefault from "@/core/components/ui/ButtonDefault";
import { HiMail } from "react-icons/hi";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

const styles = {
  form: "grid items-start gap-4",
  inputGrid: "grid gap-2",
  button: "text-sm focus:outline-none",
  dialogContent: "sm:max-w-[425px]",
  drawerHeader: "text-left",
  drawerContent: "px-4",
  drawerFooter: "pt-2",
};

function ProfileForm({
  className,
  closeDialog,
}: {
  className?: string;
  closeDialog: () => void;
}) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !name || !message) {
      toast.error(t("DialogForm.Errors.MissingFields"));
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_vr92r5g",
        "template_dvr1x78",
        e.currentTarget,
        "5J3vip7CH5ZH9OLZv"
      );
      toast.success(t("DialogForm.Success.EmailSent"));
      closeDialog();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(t("DialogForm.Errors.EmailFailed"));
    } finally {
      setLoading(false);
    }
  };

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <form
      className={cn(styles.form, "bg-[var(--background)]", className)}
      onSubmit={handleSubmit}
      dir={direction}
    >
      <div className={styles.inputGrid}>
        <Input
          type="text"
          className="bg-[var(--input-background)] text-[#a0aec0] placeholder-[var(--paragraph)] border-0"
          id="Name"
          
          placeholder={t("DialogForm.Placeholder.NameInput")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.inputGrid}>
        <Input
          className="bg-[var(--input-background)] text-[#a0aec0] placeholder-[var(--paragraph)] border-0"
          type="email"
          id="email"
          
          placeholder={t("DialogForm.Placeholder.EmailInput")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.inputGrid}>
        <Textarea
          className="bg-[var(--input-background)] text-[#a0aec0] placeholder-[var(--paragraph)] border-0"
          id="message"
          
          placeholder={t("DialogForm.Placeholder.MessageTextarea")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {!loading && (
        <ButtonDefault
          isSubmit
          text={t("Public.send")}
          iconPosition="right"
          icon={HiMail}
        />
      )}

      {loading && (
        <Button
          disabled
          className="bg-[var(--button)] text-[var(--button-text)]  gap-2 "
          type="submit"
        >
          <span>{t("About.Contact.Send")}</span>
          <span>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          </span>
        </Button>
      )}
    </form>
  );
}

export function DrawerDialogDemo() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { t } = useTranslation();

  const commonContent = (
    <div className="  text-[var(--paragraph)]">
      <p>
        {t("Public.ContactVia")}
        <button
          type="submit"
          className=" text-[var(--tertiary-color)] font-bold text-[1rem] max-md:ps-0  ps-1 pe-1 hoverd underline-hover"
        >
          {t("Public.Email")}
        </button>
      </p>
    </div>
  );

  const closeDialog = () => {
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span className="cursor-pointer ">{commonContent}</span>
        </DialogTrigger>
        <DialogContent
          className={`${styles.dialogContent} bg-[var(--background)] border-none`}
        >
          <DialogHeader className="w-full">
            <DialogTitle className="text-[var(--headline)] w-full text-center">
              {t("DialogForm.DialogTitle")}
            </DialogTitle>
          </DialogHeader>
          <ProfileForm closeDialog={closeDialog} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <span className="cursor-pointer">{commonContent}</span>
        </DrawerTrigger>
        <DrawerContent className="bg-[var(--background)]  border-none p-[1rem]">
          <DrawerHeader className={styles.drawerHeader}>
            <DrawerTitle className="cursor-pointer"></DrawerTitle>
          </DrawerHeader>
          <ProfileForm closeDialog={closeDialog} />
          {/* <DrawerFooter className={styles.drawerFooter}></DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
