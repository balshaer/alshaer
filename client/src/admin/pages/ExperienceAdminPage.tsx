import { Badge } from "@/components/ui/badge";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";
import { EditIcon, MoreHorizontal, Plus, Trash2 } from "lucide-react";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ExperienceAdminPage = () => {
  const showOTP = () => {};

  const styles = {
    dropdownMenuItem: "flex items-center justify-between cursor-pointer",
  };

  return (
    <div>
      <PageTitle title={PageTitlesData.adminExperience} />

      <header className="flex items-center justify-between">
        <h1 className="section-title">Experience</h1>

        <div className="flex gap-2">
          <Link to={"/admin/experience/add"}>
            <Plus className="adminSectionIcon" />
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <button type="submit">
                <Trash2 className="adminSectionIcon" />
              </button>
            </DialogTrigger>
            <DialogContent className="border-none bg-[var(--card-background)] text-center sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="py-4 text-center text-[var(--headline)]">
                  Delete All Experince
                </DialogTitle>
                <DialogDescription className="text-center">
                  Are you sure you want delete all experince !
                </DialogDescription>
              </DialogHeader>

              <div className="flex w-full items-center justify-center gap-4 py-4">
                <Button onClick={showOTP} variant={"outline"}>
                  yes delete them
                </Button>

                <DialogClose asChild>
                  <Button>no cancel</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div>
        <Card className="w-2/6">
          <CardHeader>
            <CardTitle>experience role</CardTitle>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="flex h-full items-center justify-center text-[var(--headline)]">
                  <MoreHorizontal className="h-4 w-4 cursor-pointer" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <Link to={"/admin/experience/edit"}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              hic libero sint et fugit qui tempora minus aspernatur quo
              assumenda sequi maiores aut saepe ut error enim, cumque obcaecati
              quaerat?
            </CardDescription>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 py-4">
            <div>
              <Badge className="w-max rounded-sm bg-[var(--mark)]">
                2020/2/2
              </Badge>
            </div>

            <div className="flex gap-2">
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

export default ExperienceAdminPage;
