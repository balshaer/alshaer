/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FaHome,
  FaProjectDiagram,
  FaBriefcase,
  FaLink,
  FaPage4,
} from "react-icons/fa";

interface SidebarLinksTypes {
  name: string;
  link: string;
  icon: any;
}

// These icons is not use rn its ready for layout updates

const sidebarLinks: SidebarLinksTypes[] = [
  {
    name: "Dashboard",
    link: "/admin",
    icon: FaHome,
  },
  {
    name: "Inbox",
    link: "/admin/mails",
    icon: FaHome,
  },
  {
    name: "Projects",
    link: "/admin/projects",
    icon: FaProjectDiagram,
  },
  {
    name: "Work experience",
    link: "/admin/works",
    icon: FaBriefcase,
  },
  {
    name: "Social links",
    link: "/admin/socialLinks",
    icon: FaLink,
  },

  {
    name: "Content",
    link: "/admin/content",
    icon: FaPage4,
  },
  {
    name: "Deleted items",
    link: "/admin/deletedItems",
    icon: FaPage4,
  },
];

export { sidebarLinks };
export type { SidebarLinksTypes };
