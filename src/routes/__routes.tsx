import About from "@/pages/About";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Projects" element={<Projects />} />
    </Routes>
  );
};

export default AppRoutes;
