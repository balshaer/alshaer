import { Breadcrumbs } from "@material-tailwind/react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../Content/Content.css";
import projectsData from "./projects";

const notFound = "https://img.icons8.com/external-filled-outline-perfect-kalash/64/external-not-found-web-development-and-programming-filled-outline-perfect-kalash.png"

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

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 3);

  const toggleProjects = () => {
    setShowAllProjects((prevShowAllProjects) => !prevShowAllProjects);
  };

  return (
    <div id="projectCard">
      <h2>{t("projects")}</h2>
      <p>{t("projectDescription")}</p>

      <br />
      <Breadcrumbs id="Breadcrumbs" fullWidth>
        <Link to="/" className="opacity-60">
          {t("Home")}
        </Link>
        <Link to="/Projects" className="opacity-60">
          {t("Projects")}
        </Link>
      </Breadcrumbs>

      <br />

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
              style={{ position: 'relative' }}
              href={project.link}
              className={
                hoveredIndex !== null && hoveredIndex !== index ? "fade" : ""
              }
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2>{t(project.title)}</h2>
              <p style={{ maxWidth: '60%' }}>{t(project.description)}</p>
              <img style={{ objectFit: 'contain', margin: 'auto', top: '0', right: '0', bottom: '0', height: '60%', position: 'absolute', borderRadius: '12px' }} src={project.img} alt={project.title} />

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
          {showAllProjects ? (
            <React.Fragment>
              See Less <ExpandLessIcon style={{ marginLeft: "0.5rem" }} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              See More <ExpandMoreIcon style={{ marginLeft: "0.5rem" }} />
            </React.Fragment>
          )}
        </motion.a>
      )}
    </div>
  );
}
