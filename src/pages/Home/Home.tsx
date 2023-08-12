import { CssBaseline } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Container from "@mui/material/Container";
import DevToPosts from '../../components/DevToPosts/DevToPosts'


export default function Home() {
  return (
    <div>
      <Container maxWidth="sm">
        <CssBaseline />
        <Header />
        <Content />
        <DevToPosts />
      </Container>
    </div>
  );
}
