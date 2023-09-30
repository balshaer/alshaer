import { Box, Typography } from "@mui/material";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import MainButtons from "../MainButtons/MainButtons";
import "./Content.css";

export default function Content() {
  const { t } = useTranslation();

  const title = t("Title");
  const jobTitle = t("Job Title");
  const description = t("Description");
  const followDescription = t("Follow Description");
  const mailto = t("mailto");
  const email = "alsher.info@gmail.com";

  return (
    <Box sx={{ margin: "4rem 0 " }}>
      <Toaster />
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {jobTitle}
      </Typography>
      <br />

      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <br />
      <Typography
        className="FollowDescription"
        variant="body2"
        display="block"
        gutterBottom
      >
        {followDescription}
      </Typography>
      <br />
      <MainButtons />
      <br />
      <Typography variant="body2" gutterBottom>
        {mailto}
        <a
          className="mailLink"
          id="mailLink"
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </Typography>
      <br />
    </Box>
  );
}
