import Home from "@/pages/Home";
import NotFound from "@/pages/errors/NotFound";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
      {/* <Route path="projects" element={<Projects />} /> */}
      {/* <Route path="blog" element={<Blog />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
