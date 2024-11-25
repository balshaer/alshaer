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
import { HiMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@react-hook/media-query";
import i18n from "@/i18n";
import { Button } from "@/components/ui/button";

const styles = {
  form: "grid items-start gap-4 ",
  inputGrid: "grid gap-2",
  dialogContent: "sm:max-w-[425px]",
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
          "5J3vip7CH5ZH9OLZv",
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
          </div>,
        );
      }
    }
  };

  return (
    <form
      className={cn(styles.form, className)}
      onSubmit={handleSubmit}
      dir={direction}
    >
      <div className={styles.inputGrid}>
        <Input
          type="text"
          className={cn({
            "input-error": inputEffect && !name,
          })}
          id="Name"
          placeholder={t("DialogForm.Placeholder.NameInput")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {email === "" && accept && (
          <div className="flex items-center justify-start gap-1 text-red-300">
            <span className="text-sm">
              <HiOutlineExclamationCircle />
            </span>

            <span className="text-sm">{t("DialogForm.Erros.Name")}</span>
          </div>
        )}
      </div>

      <div className={styles.inputGrid}>
        <Input
          className={cn({
            "input-error": inputEffect && !name,
          })}
          type="email"
          id="email"
          placeholder={t("DialogForm.Placeholder.EmailInput")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {email === "" && accept && (
          <div className="flex items-center justify-start gap-1 text-red-300">
            <span className="text-sm">
              <HiOutlineExclamationCircle />
            </span>
            <span className="text-sm">{t("DialogForm.Erros.Email")}</span>
          </div>
        )}
      </div>

      <div className={styles.inputGrid}>
        <Textarea
          className={cn({
            "input-error": inputEffect && !name,
          })}
          id="message"
          placeholder={t("DialogForm.Placeholder.MessageTextarea")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {email === "" && accept && (
          <div className="flex w-full items-center justify-start gap-1 text-red-300">
            <span className="text-sm">
              <HiOutlineExclamationCircle />
            </span>
            <span className="text-sm">{t("DialogForm.Erros.Message")}</span>
          </div>
        )}
      </div>

      {!loading && (
        <Button type="submit">
          <span>{t("Public.send")}</span>
          <span>
            <HiMail />
          </span>
        </Button>
      )}

      {loading && (
        <Button disabled>
          <span>{t("About.Contact.Send")}</span>
          <span>
            <AiOutlineReload />
          </span>
        </Button>
      )}
    </form>
  );
}

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { t } = useTranslation();

  const commonContent = (
    <div className="text-[var(--paragraph)]">
      <p className="hoverd py-[8px] ps-1 text-[1rem] font-bold text-[var(--tertiary-color)] max-md:ps-0">
        {t("Public.Email")}
      </p>
    </div>
  );
  const closeDialog = () => {
    setOpen(false);
  };

  const { language } = i18n;
  const direction = language === "ar" ? "ltr" : "rtl";
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger dir={direction} asChild>
          <div className="float-start m-auto cursor-pointer">
            {commonContent}
          </div>
        </DialogTrigger>
        <DialogContent
          className={`${styles.dialogContent} border-none bg-[var(--background)]`}
        >
          <DialogHeader className="w-full">
            <DialogTitle className="w-full text-center text-[var(--headline)]">
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
        <DrawerContent className="border-none bg-[var(--background)] p-4">
          <DrawerHeader className={"text-left"}>
            <DrawerTitle className="cursor-pointer"></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <ProfileForm closeDialog={closeDialog} />
          <DrawerFooter className={"pt-2"}></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
