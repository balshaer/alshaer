import { Container, CssBaseline } from "@mui/material";
import React from "react";
import Content from "../../components/Content/Content";
import DevToPosts from "../../components/DevToPosts/DevToPosts";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";

export default function Home() {
  return (
    <div>
      <Container maxWidth="sm">
        <Preloader />

        <CssBaseline />
        <Header />
        <Content />
        <br />
        <DevToPosts />
        <br />
      </Container>
    </div>
  );
}
