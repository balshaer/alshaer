import NotFound from "@/modules/errors/NotFound";
import AllProjects from "@/modules/main/AllProjects";
import Home from "@/modules/main/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
