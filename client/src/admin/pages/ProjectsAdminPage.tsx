import { Badge } from "@/components/ui/badge";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { EditIcon, Globe, MoreHorizontal, Plus, Trash2 } from "lucide-react";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectsAdminPage = () => {
  const [OTP, setOTP] = useState(false);

  const showOTP = () => {
    setOTP(true);
  };

  const styles = {
    dropdownMenuItem: "flex items-center justify-between cursor-pointer",
    linkStyle:
      "hoverd flex cursor-pointer items-center gap-2 hover:text-[var(--headline)] text-sm",
  };
  return (
    <div>
      <PageTitle title={PageTitlesData.adminProjects} />

      <header className="flex items-center justify-between">
        <h1 className="section-title">Projects</h1>

        <div className="flex gap-2">
          <Link to={"/admin/project/add"}>
            <Plus className="adminSectionIcon" />
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <button type="submit">
                <Trash2 className="adminSectionIcon" />
              </button>
            </DialogTrigger>
            <DialogContent className="border-none bg-[var(--card-background)] text-center sm:max-w-[425px]">
              {OTP == false && (
                <DialogHeader>
                  <DialogTitle className="py-4 text-center text-[var(--headline)]">
                    Delete All Projects
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Are you sure you want delete all projects !
                  </DialogDescription>
                </DialogHeader>
              )}

              {OTP && (
                <DialogHeader>
                  <DialogTitle className="py-4 text-center text-[var(--headline)]">
                    Delete all projects
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Write verify code
                  </DialogDescription>
                </DialogHeader>
              )}

              {OTP && (
                <div className="flex w-full items-center justify-center">
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              )}

              {OTP == false && (
                <div className="flex w-full items-center justify-center gap-4 py-4">
                  <Button onClick={showOTP} variant={"outline"}>
                    yes delete them
                  </Button>

                  <DialogClose asChild>
                    <Button> cancel</Button>
                  </DialogClose>
                </div>
              )}
              {OTP && (
                <div className="flex w-full items-center justify-center gap-4 py-4">
                  <Button onClick={showOTP} variant={"outline"}>
                    Delet all projects
                  </Button>

                  <DialogClose asChild>
                    <Button> cancel</Button>
                  </DialogClose>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div className="cardGroups">
        <Card className="w-2/6">
          <CardHeader>
            <CardTitle>project name</CardTitle>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="flex h-full items-center justify-center text-[var(--headline)]">
                  <MoreHorizontal className="h-4 w-4 cursor-pointer" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />

                <Link to={"/admin/project/edit"}>
                  <DropdownMenuItem className={styles.dropdownMenuItem}>
                    <span>Edit</span>
                    <EditIcon className="h-4 w-4" />
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className={styles.dropdownMenuItem}>
                  <span>Romove</span>
                  <Trash2 className="h-4 w-4" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>

          <CardContent>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              fugiat ratione unde possimus itaque. Quisquam sit minima, autem
              magni hic sint consectetur ut ipsa tempore asperiores labore error
              id eum.
            </CardDescription>
          </CardContent>

          <CardFooter className="flex-col">
            <div className="links text-md flex flex-col gap-2 py-4 text-[var(--paragraph)]">
              <div className={styles.linkStyle}>
                <ImGithub className="h-4 w-4" />

                <div>https://github.com</div>
              </div>
              <div className={styles.linkStyle}>
                <Globe className="h-4 w-4" />
                <div>https://website.com</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Badge>t213</Badge>
              <Badge>t</Badge>
              <Badge>t</Badge>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsAdminPage;
