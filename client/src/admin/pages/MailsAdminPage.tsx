import {
  ArrowLeft,
  File,
  Inbox,
  Pencil,
  Search,
  Send,
  Star,
  Trash2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { PageTitle } from "@/helper";
import { PageTitlesData } from "@/data/PageTitlesData";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface Mail {
  id: string;
  name: string;
  subject: string;
  text: string;
  date: string;
  read: boolean;
  labels: string[];
  starred: boolean;
  favorite: boolean;
  value: any;
}

import { AnimatePresence, motion } from "framer-motion";

export default function MailsAdminPage() {
  const [mails, setMails] = useState([
    {
      id: "1",
      name: "Andy Smith",
      subject: "Hey, let's catch up",
      text: "I was thinking we could meet for coffee this weekend. What do you think?",
      date: "2023-07-25T11:32:00",
      read: true,
      labels: ["personal"],
      starred: false,
      favorite: false,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      subject: "Project Update",
      text: "Just wanted to give you a quick update on the project. We're making good progress!",
      date: "2023-07-25T10:15:00",
      read: false,
      labels: ["work"],
      starred: true,
      favorite: true,
    },
    {
      id: "3",
      name: "Michael Brown",
      subject: "Invitation to speak at conference",
      text: "We would be honored if you could speak at our upcoming tech conference.",
      date: "2023-07-24T15:45:00",
      read: true,
      labels: ["work"],
      starred: false,
      favorite: false,
    },
    {
      id: "4",
      name: "Emily Davis",
      subject: "Family reunion plans",
      text: "Hey! I'm starting to plan our family reunion for next summer. Are you available in July?",
      date: "2023-07-23T09:20:00",
      read: true,
      labels: ["personal", "important"],
      starred: false,
      favorite: true,
    },
    {
      id: "5",
      name: "Alex Johnson",
      subject: "New product launch",
      text: "Exciting news! We're launching our new product next month. Here are the details...",
      date: "2023-07-22T14:10:00",
      read: false,
      labels: ["work", "important"],
      starred: true,
      favorite: false,
    },
  ]);

  const [selectedMail, setSelectedMail] = useState(mails[0]);
  const [mailFilter, setMailFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [composeOpen, setComposeOpen] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);
  const [deletedMails, setDeletedMails] = useState<Mail[]>([]);

  const filteredMails = mails.filter((mail) => {
    if (mailFilter === "starred" && !mail.starred) return false;
    if (mailFilter === "favorites" && !mail.favorite) return false;
    if (mailFilter === "unread" && mail.read) return false;
    if (
      searchTerm &&
      !mail.subject.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !mail.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !mail.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

  const toggleStar = (id) => {
    setMails(
      mails.map((mail) =>
        mail.id === id ? { ...mail, starred: !mail.starred } : mail,
      ),
    );
  };

  const toggleRead = (id) => {
    setMails(
      mails.map((mail) =>
        mail.id === id ? { ...mail, read: !mail.read } : mail,
      ),
    );
  };

  const deleteMail = (id) => {
    const mailToDelete = mails.find((mail) => mail.id === id);
    setDeletedMails([...deletedMails, mailToDelete]);
    setMails(mails.filter((mail) => mail.id !== id));
    if (selectedMail.id === id) {
      setSelectedMail(mails[0]);
    }
  };

  const clearDeletedMails = () => {
    setDeletedMails([]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const [openMailView, setOpenMailView] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <PageTitle title={PageTitlesData.adminMails} />

      <div className="relative flex h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <div className="flex w-full flex-col">
              <div className="border-b border-[var(--border)] py-2">
                <div className="flex h-16 items-center">
                  <div className="flex w-full items-center">
                    <h1 className="mr-4 text-xl font-bold text-[var(--headline)]">
                      Inbox
                    </h1>

                    <div className="relative w-full max-w-sm">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search emails"
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Tabs
                  defaultValue="all"
                  className="w-full max-md:overflow-y-scroll"
                >
                  <TabsList className="flex w-full items-start justify-start gap-8">
                    <TabsTrigger
                      value="compose"
                      onClick={() => setComposeOpen(true)}
                      className="flex items-center justify-center"
                    >
                      <Pencil className="mr-2 h-4 w-4" />
                      Compose
                    </TabsTrigger>
                    <TabsTrigger
                      value="all"
                      onClick={() => setMailFilter("all")}
                      className="flex items-center justify-center"
                    >
                      <Inbox className="mr-2 h-4 w-4" />
                      Inbox
                    </TabsTrigger>
                    <TabsTrigger
                      value="starred"
                      onClick={() => setMailFilter("starred")}
                      className="flex items-center justify-center"
                    >
                      <Star className="mr-2 h-4 w-4" />
                      Starred
                    </TabsTrigger>
                    <TabsTrigger
                      value="unread"
                      onClick={() => setMailFilter("unread")}
                      className="flex items-center justify-center"
                    >
                      <File className="mr-2 h-4 w-4" />
                      Unread
                    </TabsTrigger>
                    <TabsTrigger
                      value="sent"
                      onClick={() => setMailFilter("sent")}
                      className="flex items-center justify-center"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Sent
                    </TabsTrigger>
                    <TabsTrigger
                      value="deleted"
                      onClick={() => setMailFilter("deleted")}
                      className="flex items-center justify-center"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Deleted
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="w-full flex-1 overflow-auto py-4">
                <nav className="grid items-start text-sm font-medium">
                  {mailFilter === "deleted" ? (
                    <>
                      {deletedMails.map((mail) => (
                        <div
                          key={mail.id}
                          className="flex cursor-pointer items-center rounded-lg p-2"
                        >
                          <div className="flex flex-col items-start">
                            <div className="font-semibold text-[var(--headline)]">
                              {mail.name}
                            </div>
                            <div className="text-xs text-[var(--paragraph)]">
                              {mail.subject}
                            </div>
                          </div>
                        </div>
                      ))}

                      {deletedMails == 0 && (
                        <p className="py-40 text-center text-[var(--paragraph)]">
                          no messages here
                        </p>
                      )}

                      <Button onClick={clearDeletedMails}>Clear All</Button>
                    </>
                  ) : (
                    filteredMails.map((mail) => (
                      <div
                        key={mail.id}
                        onClick={() => setOpenMailView(true)}
                        className={cn(
                          "flex cursor-pointer items-center rounded-lg p-2",
                          selectedMail.id === mail.id &&
                            "bg-[var(--card-background)]",
                        )}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="mr-3"
                          onClick={() => toggleStar(mail.id)}
                        >
                          <Star
                            className={cn(
                              "h-4 w-4",
                              mail.starred
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground",
                            )}
                          />
                          <span className="sr-only">Star</span>
                        </Button>

                        <div
                          className="w-full justify-start text-sm font-normal"
                          onClick={() => {
                            setSelectedMail(mail);
                            if (!mail.read) toggleRead(mail.id);
                          }}
                        >
                          <div className="flex w-full items-center justify-between hover:bg-none">
                            <div className="flex items-center">
                              <div
                                className={cn(
                                  "mr-2 h-2 w-2 rounded-full",
                                  mail.read ? "bg-transparent" : "bg-blue-600",
                                )}
                              />
                              <div className="flex flex-col items-start">
                                <div className="font-semibold text-[var(--headline)]">
                                  {mail.name}
                                </div>
                                <div className="text-xs text-[var(--paragraph)]">
                                  {mail.subject}
                                </div>
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {formatDate(mail.date)}
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-none px-2"
                          onClick={() => deleteMail(mail.id)}
                        >
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Delete</span>
                        </div>
                      </div>
                    ))
                  )}
                </nav>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />

          {/* mobile view  */}
          {openMailView && (
            <AnimatePresence>
              <motion.div
                initial={{ x: "100vw", opacity: "0%" }}
                animate={{ x: "0vw", opacity: "100%" }}
                transition={{ duration: 0.2 }}
                exit={{ x: "100vw", opacity: "0%" }}
                className="hidden w-full flex-col max-md:flex"
              >
                <header className="pb-8">
                  <ArrowLeft
                    onClick={() => setOpenMailView(false)}
                    className="sectionIcon"
                  />
                </header>

                <div className="overflow-auto">
                  {selectedMail && (
                    <div className="space-y-6">
                      <div className="relative">
                        <h2 className="text-2xl font-bold text-[var(--headline)]">
                          {selectedMail.subject}
                        </h2>

                        <div className="text-sm text-[var(--headline)]">
                          From: {selectedMail.name}
                        </div>
                        <div className="text-sm text-[var(--headline)]">
                          Date: {formatDate(selectedMail.date)}
                        </div>
                      </div>
                      <div className="text-sm text-[var(--headline)]">
                        {selectedMail.text}
                      </div>
                      <Button onClick={() => setReplyOpen(true)}>Reply</Button>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          <ResizablePanel
            className="border-l bg-[var(--background)] max-md:hidden"
            defaultSize={24}
          >
            <div className="w-[400px] overflow-auto p-6 md:block">
              {selectedMail && (
                <div className="space-y-6">
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-[var(--headline)]">
                      {selectedMail.subject}
                    </h2>

                    <div className="text-sm text-[var(--headline)]">
                      From: {selectedMail.name}
                    </div>
                    <div className="text-sm text-[var(--headline)]">
                      Date: {formatDate(selectedMail.date)}
                    </div>
                  </div>
                  <div className="text-sm text-[var(--headline)]">
                    {selectedMail.text}
                  </div>
                  <Button onClick={() => setReplyOpen(true)}>Reply</Button>
                </div>
              )}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Dialog open={composeOpen} onOpenChange={setComposeOpen}>
        <DialogContent className="border-none sm:max-w-[425px]">
          <form action="#">
            <h1 className="form-title">Send Email</h1>

            <Input type="text" placeholder="name" />
            <Input type="email" placeholder="mail@gmail.com" />
            <Textarea placeholder="message" />

            <Button variant={"outline"}>Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={replyOpen} onOpenChange={setReplyOpen}>
        <DialogContent className="border-none sm:max-w-[425px]">
          <form action="#">
            <h1 className="form-title">Send Email</h1>

            <Input
              value={selectedMail.name}
              readOnly
              type="text"
              placeholder="name"
            />
            <Input type="email" placeholder="mail@gmail.com" />
            <Textarea placeholder="message" />

            <Button variant={"outline"}>Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
