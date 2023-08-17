import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import DevToPosts from "../../components/DevToPosts/DevToPosts";
import { SimpleFooter } from "../../components/SimpleFooter/SimpleFooter";

export default function Home() {
  return (
    <div>
      <Container maxWidth="sm">
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
