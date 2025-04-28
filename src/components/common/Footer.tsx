"use client";

import { github, linkedin, youtube, mailto, email } from "@/data/Links";
import { scrollToTop } from "@/lib/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Youtube, ArrowUp, Heart } from "lucide-react";

interface FooterLink {
  title: string;
  link: string;
  icon?: React.ReactNode;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const path = usePathname();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Social media links with icons
  const socialLinks: FooterLink[] = [
    {
      title: "GitHub",
      link: github,
      icon: <Github className="h-5 w-5" />,
      external: true,
    },
    {
      title: "LinkedIn",
      link: linkedin,
      icon: <Linkedin className="h-5 w-5" />,
      external: true,
    },
    {
      title: "YouTube",
      link: youtube,
      icon: <Youtube className="h-5 w-5" />,
      external: true,
    },
    {
      title: "Email",
      link: mailto,
      icon: <Mail className="h-5 w-5" />,
      external: true,
    },
  ];

  // Footer sections
  const footerSections: FooterSection[] = [
    {
      title: "Navigation",
      links: [
        { title: "Home", link: "/" },
        { title: "Work", link: "/#work" },
        { title: "Projects", link: "/projects" },
        { title: "Contact", link: "/contact" },
      ],
    },
    {
      title: "Social",
      links: socialLinks,
    },
  ];

  return (
    <footer className="w-full z-40 border-t border-[var(--footer-border-color)] bg-[var(--card-background)] pt-12 pb-6">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Brand section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xl font-bold text-[var(--headline)]">
              Baraa Alshaer
            </h3>
            <p className="text-[var(--paragraph)] max-w-xs">
              Full-Stack Developer specializing in creating seamless and
              efficient web applications.
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-full bg-[var(--card-background)] border border-[var(--card-border-color)] text-[var(--paragraph)] hover:text-[var(--link-color)] hover:border-[var(--link-color)] transition-colors"
                  aria-label={social.title}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Navigation sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              variants={itemVariants}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-lg font-semibold text-[var(--headline)]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.link}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-[var(--paragraph)] hover:text-[var(--link-color)] transition-colors flex items-center gap-2"
                      onClick={() => {
                        if (link.link === "/#work") {
                          const workSection = document.getElementById("work");
                          if (workSection) {
                            workSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                    >
                      {link.title}
                      {link.external && <span className="text-xs">↗</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section with copyright and back to top */}
        <div className="border-t border-[var(--footer-border-color)] pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-[var(--paragraph)] mb-4 md:mb-0 flex items-center">
            <span>
              &copy; {currentYear} Baraa Alshaer. All rights reserved.
            </span>
            <span className="mx-2 inline-flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> in
              Palestine
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[var(--paragraph)] hover:text-[var(--link-color)] transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
