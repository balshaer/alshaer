import React, { useState } from "react";
import emailjs from "emailjs-com";
import { cn } from "@/lib/utils";
import "animate.css";
import { AiOutlineReload } from "react-icons/ai";
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
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi2";

import ButtonDefault from "@/components/ui/ButtonDefault";
import { HiMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@react-hook/media-query";
import i18n from "@/i18n";

const styles = {
  form: "grid items-start gap-4 ",
  inputGrid: "grid gap-2",
  button: "text-sm focus:outline-none ",
  dialogContent: "sm:max-w-[425px]",
  drawerHeader: "text-left",
  drawerContent: "px-4",
  drawerFooter: "pt-2",
  InputStyle:
    "bg-[var(--input-background)] text-[var(--input-text)] placeholder-[var(--paragraph)] border-0",
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
  const [inputEffect, setInputEffect] = useState(false);

  let flag = true;

  const [accept, setAccept] = useState(false);

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  // Send form data to email inbox

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !name || !message) {
      toast.error(t("DialogForm.Errors.MissingFields"));
      setInputEffect(true);
      return;
    }

    setAccept((prevAccept) => {
      if (email === "" || !prevAccept || name === "" || message === "") {
        flag = false;
      } else {
        setLoading(true);
      }
      return prevAccept;
    });

    if (flag) {
      setLoading(true);
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
        emailjs.sendForm(
          "service_vr92r5g",
          "template_dvr1x78",
          form,
          "5J3vip7CH5ZH9OLZv"
        );
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

            <span>{t("About.Contact.MessageNote")}</span>
          </div>
        );
      }
    }
  };

  return (
    <form
      className={cn(styles.form, "bg-[var(--background)]   ", className)}
      onSubmit={handleSubmit}
      dir={direction}
    >
      <div className={styles.inputGrid}>
        <Input
          type="text"
          className={cn(styles.InputStyle, {
            "animate__shakeX animate__animated border-1 border border-red-400":
              inputEffect && !name,
          })}
          id="Name"
          placeholder={t("DialogForm.Placeholder.NameInput")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {email === "" && accept && (
          <div className="text-red-300 flex justify-start items-center gap-1">
            <span className="text-sm">
              <HiOutlineExclamationCircle />
            </span>

            <span className=" text-sm">{t("DialogForm.Erros.Name")}</span>
          </div>
        )}
      </div>

      <div className={styles.inputGrid}>
        <Input
          className={cn(styles.InputStyle, {
            "animate__shakeX animate__animated border-1 border border-red-400":
              inputEffect && !name,
          })}
          type="email"
          id="email"
          placeholder={t("DialogForm.Placeholder.EmailInput")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {email === "" && accept && (
          <div className="text-red-300 flex justify-start items-center gap-1">
            <span className="text-sm">
              <HiOutlineExclamationCircle />
            </span>
            <span className=" text-sm">{t("DialogForm.Erros.Email")}</span>
          </div>
        )}
      </div>

      <div className={styles.inputGrid}>
        <Textarea
          className={cn(styles.InputStyle, {
            "animate__shakeX animate__animated border-1 border border-red-400":
              inputEffect && !name,
          })}
          id="message"
          placeholder={t("DialogForm.Placeholder.MessageTextarea")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {email === "" && accept && (
          <div className="flex items-center justify-start gap-1 w-full text-red-300 ">
            <span className="text-sm">
              <HiOutlineExclamationCircle />
            </span>
            <span className=" text-sm">{t("DialogForm.Erros.Message")}</span>
          </div>
        )}
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
        <ButtonDefault
          disabled
          text={t("About.Contact.Send")}
          iconPosition="right"
          icon={AiOutlineReload}
        />
      )}
    </form>
  );
}

// Contact Form
export function ContactForm() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { t } = useTranslation();

  const commonContent = (
    <div className="text-[var(--paragraph)]">
      <p className="text-[var(--tertiary-color)] font-bold text-[1rem] max-md:ps-0  ps-1 pe-1 hoverd ">
        {t("Public.Email")}
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
        <DrawerContent className="bg-[var(--background)]  border-none p-[1rem]">
          <DrawerHeader className={styles.drawerHeader}>
            <DrawerTitle className="cursor-pointer"></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <ProfileForm closeDialog={closeDialog} />
          <DrawerFooter className={styles.drawerFooter}></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
