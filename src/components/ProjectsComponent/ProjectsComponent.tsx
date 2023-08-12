import React, { useState } from "react";
import "../Content/Content.css";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import projectsData from "./projects.json";

export default function ProjectsComponent() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 3);

  const toggleProjects = () => {
    setShowAllProjects((prevShowAllProjects) => !prevShowAllProjects);
  };

  return (
    <div id="projectCard">
      <h2>{t("project")}</h2>

      <p>{t("projectDescription")}</p>
      <motion.div
        className="items"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {visibleProjects.map((project, index) => (
          <motion.li
            key={project.key}
            className="item"
            variants={itemVariants}
            custom={index}
          >
            <a
              id="linkItem"
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              className={hoveredIndex !== null && hoveredIndex !== index ? "fade" : ""}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2>{t(project.title)}</h2>
              <p>{t(project.description)}</p>
            </a>
          </motion.li>
        ))}
      </motion.div>
      {projectsData.length > 3 && (
        <motion.a
          id="seeAll"
          style={{
            color: "#3f91d6",
            fontSize: "1rem",
            padding: "2rem 0",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            width: "max-content",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05 }}
          onClick={toggleProjects}
        >
          {showAllProjects ? "See Less" : "See More"}
        </motion.a>
      )}
    </div>
  );
}
