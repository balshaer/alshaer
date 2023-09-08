import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ProjectsPage from "./pages/Projects/Projects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};

export default AppRoutes;
