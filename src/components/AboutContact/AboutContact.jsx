import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./AboutContact.css";

export default function AboutContact() {
  const [repoCount, setRepoCount] = useState(null);
  const [hoverStates, setHoverStates] = useState({
    githubIcon: false,
    linkedinIcon: false,
    youtubeIcon: false,
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Baraasher");
        const data = await response.json();
        setRepoCount(data.public_repos);
      } catch (error) {
        console.error("Error fetching repository count:", error);
      }
    };
    fetchRepoCount();
  }, []);

  const handleIconHover = (iconId) => {
    setHoverStates((prevHoverStates) => ({
      ...prevHoverStates,
      [iconId]: !hoverStates[iconId],
    }));
  };

  return (
    <Box className="contact-timeline flexColumnCenter">
      <a
        id="githubIcon"
        href="https://github.com/Baraasher/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
        onMouseEnter={() => handleIconHover("githubIcon")}
        onMouseLeave={() => handleIconHover("githubIcon")}
      >
        <GitHubIcon
          className={`ContactIcon ${hoverStates.githubIcon ? "hovered" : ""}`}
        />
        <Typography display="block" gutterBottom>
          {t("github")}
        </Typography>
      </a>
      <a
        id="linkedinIcon"
        href="https://www.linkedin.com/in/baraa-alsher/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
        onMouseEnter={() => handleIconHover("linkedinIcon")}
        onMouseLeave={() => handleIconHover("linkedinIcon")}
      >
        <LinkedInIcon
          className={`ContactIcon ${hoverStates.linkedinIcon ? "hovered" : ""}`}
        />
        <Typography display="block" gutterBottom>
          {t("linkedin")}
        </Typography>
      </a>
      <a
        id="youtubeIcon"
        href="https://www.youtube.com/@CodeWithBaraa"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
        onMouseEnter={() => handleIconHover("youtubeIcon")}
        onMouseLeave={() => handleIconHover("youtubeIcon")}
      >
        <YouTubeIcon
          className={`ContactIcon ${hoverStates.youtubeIcon ? "hovered" : ""}`}
        />
        <Typography display="block" gutterBottom>
          {t("youtube")}
        </Typography>
      </a>
    </Box>
  );
}
