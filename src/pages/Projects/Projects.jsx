import React from "react";
import { CssBaseline, Container } from "@mui/material";
import SecondHeader from "../../components/SecondHeader/SecondHeader";
import ProjectsComponent from "../../components/ProjectsComponent/ProjectsComponent";

export default function Projects() {
  return (
    <div>
      <Container maxWidth="sm">
        <CssBaseline />
        <SecondHeader />

        <ProjectsComponent />
      </Container>
    </div>
  );
}
