"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useContent } from "@/hooks/use-content";
import { useSocialLinks } from "@/hooks/use-social-links";
import { memo } from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TiIcons from "react-icons/ti";

const ALAZHAR_URL = "https://www.alazhar.edu.ps";

const iconLibraries = {
  fa: FaIcons,
  ai: AiIcons,
  bi: BiIcons,
  bs: BsIcons,
  fi: FiIcons,
  hi: HiIcons,
  io: IoIcons,
  md: MdIcons,
  ri: RiIcons,
  si: SiIcons,
  ti: TiIcons,
};

function HeroSection() {
  const { content: heroContent, loading } = useContent("hero");
  const { socialLinks, loading: socialLoading } = useSocialLinks(true);

  const getIconComponent = (iconName: string, library: string) => {
    const iconLib = iconLibraries[library as keyof typeof iconLibraries];
    if (!iconLib) return null;
    const IconComponent = iconLib[iconName as keyof typeof iconLib];
    if (!IconComponent) return null;
    const Icon = IconComponent as React.ComponentType<{ className?: string }>;
    return <Icon className="h-4 w-4" />;
  };

  const defaultContent = {
    title: "Baraa Alshaer",
    subtitle: "software engineer | Full-Stack Developer",
    content: {
      paragraphs: [
        "I am a Full-Stack Developer from Palestine, specializing in crafting seamless and efficient web applications across both front-end and back-end technologies. I hold a degree in software engineering from Al-Azhar University, where I developed a strong foundation in modern software development principles, problem-solving, and system architecture.",
        "I approach each project with a focus on delivering high-quality solutions, combining my skills in frontend development, backend systems, and overall project design. My aim is to create user-centric applications that not only meet client needs but also drive innovation.",
        "I am dedicated to staying current with industry trends and continuously improving my craft. My work reflects a commitment to excellence and a drive to contribute meaningfully to the tech community.",
      ],
    },
  };

  const displayContent = heroContent || defaultContent;

  return (
    <div className="header max-md:pt-[50px]">
      <div className="header-content">
        {loading ? (
          <>
            <Skeleton className="h-12 w-[300px] mb-4 max-md:w-[250px]" />
            <Skeleton className="h-6 w-[400px] mb-6 max-md:w-[300px]" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[95%]" />
              <div className="space-y-3 mt-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[85%]" />
                <Skeleton className="h-4 w-[92%]" />
              </div>
              <div className="space-y-3 mt-6">
                <Skeleton className="h-4 w-[88%]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="header-title">{displayContent.title}</h1>
            <h1 className="subtitle capitalize">{displayContent.subtitle}</h1>
            <h1 className="text-[var(--paragraph)]">
              {displayContent.description}
            </h1>
          </>
        )}
      </div>

      {socialLoading ? (
        <div className="flex items-start gap-4 py-[8px] max-md:w-full max-md:flex-col">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-[40px] w-[120px] max-md:w-full" />
          ))}
        </div>
      ) : socialLinks.length > 0 ? (
        <ul className="hovered section flex items-start gap-4 py-[8px] text-[1rem] text-[var(--paragraph)] max-md:w-full max-md:flex-col">
          {socialLinks.map((social) => (
            <li
              key={social._id}
              className="rounded-[12px] underline max-md:w-full max-md:bg-[var(--card-background)] max-md:px-[8px] max-md:py-[14px]"
            >
              <a
                className="flex contact-title capitalize text-[1rem] items-center hoverd gap-2 max-md:flex max-md:flex-row h-[100%] w-full"
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
              >
                <span className="hidden h-full items-center justify-center max-md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </span>
                <span className="flex h-full items-center justify-center gap-1 text-[var(--headline)] opacity-80">
                  <span className="max-md:hidden">
                    {getIconComponent(social.icon, social.iconLibrary)}
                  </span>
                  <span>{social.platform}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default memo(HeroSection);
