import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
