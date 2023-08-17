import { CssBaseline } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
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
