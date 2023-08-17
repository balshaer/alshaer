import React from "react";
import { CssBaseline, Container } from "@mui/material";
import SecondHeader from "../../components/SecondHeader/SecondHeader";
import ProjectsComponent from "../../components/ProjectsComponent/ProjectsComponent";
import { Breadcrumbs } from "@material-tailwind/react";

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
