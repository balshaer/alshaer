import React, { useState } from "react";
import emailjs from "emailjs-com";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useMediaQuery } from "@react-hook/media-query";
import { Textarea } from "@/components/ui/textarea";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { t } from "i18next";

const styles = {
  form: "grid items-start gap-4",
  inputGrid: "grid gap-2",
  button: "text-sm focus:outline-none ",
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  let flag = true;

  const [accept, setAccept] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAccept(true);

    if (email === "" || !accept || name === "" || message === "") {
      flag = false;
    } else {
      flag = true;
      setLoading(true);
    }

    if (flag) {
      const form = document.createElement("form");

      form.setAttribute("action", "");
      form.setAttribute("method", "post");

      const nameInput = document.createElement("input");
      nameInput.setAttribute("type", "hidden");
      nameInput.setAttribute("name", "name");
      nameInput.setAttribute("value", name);
      form.appendChild(nameInput);

      const emailInput = document.createElement("input");
      emailInput.setAttribute("type", "hidden");
      emailInput.setAttribute("name", "email");
      emailInput.setAttribute("value", email);
      form.appendChild(emailInput);

      const messageInput = document.createElement("input");
      messageInput.setAttribute("type", "hidden");
      messageInput.setAttribute("name", "message");
      messageInput.setAttribute("value", message);
      form.appendChild(messageInput);

      document.body.appendChild(form);

      try {
        const response = await emailjs.sendForm(
          "service_vr92r5g",
          "template_dvr1x78",
          form,
          "5J3vip7CH5ZH9OLZv"
        );
        console.log("Email sent successfully:", response);
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        document.body.removeChild(form);
        closeDialog();
        toast(
          <div className="flex items-center justify-start gap-1">
            <span className="">
              <HiOutlineCheckCircle />
            </span>

            <span>{t("Contact.MessageNote")}</span>
          </div>
        );
      }
    }
  };

  return (
    <form
      className={cn(styles.form, "bg-[var(--background)]", className)}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputGrid}>
        <Input
          type="text"
          className="bg-[var(--main)] text-[var(--illustration-stroke)]"
          id="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {email === "" && accept && (
          <div className="text-red-300 flex justify-start items-center gap-3">
            <span className="text-2xl">
              <HiOutlineExclamationCircle />
            </span>

            <span className=" text-xs">{t("Contact.PleaseEnterYourName")}</span>
          </div>
        )}
      </div>

      <div className={styles.inputGrid}>
        <Input
          className="bg-[var(--main)] text-[var(--illustration-stroke)]"
          type="email"
          id="email"
          placeholder="Email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {email === "" && accept && (
          <div className="text-red-300 flex justify-start items-center gap-3">
            <span className="text-2xl">
              <HiOutlineExclamationCircle />
            </span>
            <span className="text-red-300 text-xs">
              {t("Contact.PleaseEnterYourEmail")}
            </span>
          </div>
        )}
      </div>

      <div className={styles.inputGrid}>
        <Textarea
          className="bg-[var(--main)] text-[var(--illustration-stroke)]"
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {email === "" && accept && (
          <div className="flex items-center justify-start gap-2 w-full text-red-300 ">
            <span className="">
              <HiOutlineExclamationCircle />
            </span>
            <span className="text-xs">
              {t("Contact.PleaseEnterWriteYourMessage")}
            </span>
          </div>
        )}
      </div>

      {!loading && (
        <Button
          className="bg-[var(--button)] text-[var(--button-text)] hover:bg-[var(--button)] "
          type="submit"
        >
          {t("Contact.Send")}
        </Button>
      )}

      {loading && (
        <Button
          disabled
          className="bg-[var(--button)] text-[var(--button-text)]  gap-2 "
          type="submit"
        >
          <span>{t("Contact.Send")}</span>

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

  const commonContent = (
    <div className="text-[var(--link-color)] hover:text-[var(--main)] flex items-center justify-center gap-2 link-effect ">
      <span className=" my-email">alshaer.contact@gmail.com</span>
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
          <DialogHeader>
            <DialogTitle>{commonContent}</DialogTitle>
            <DialogDescription></DialogDescription>
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
        <DrawerContent className="bg-[var(--background)] border-none p-[1rem]">
          <DrawerHeader className={styles.drawerHeader}>
            <DrawerTitle className="cursor-pointer">
              {commonContent}
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <ProfileForm closeDialog={closeDialog} />
          <DrawerFooter className={styles.drawerFooter}>
            <DrawerClose asChild>
              <span>{t("Contact.Cancel")}</span>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
