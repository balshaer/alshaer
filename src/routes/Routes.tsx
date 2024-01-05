// Routes.tsx
import Experience from '@/pages/Experience';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="experience" element={<Experience />} />
      <Route path="Projects" element={<Projects />} />
      
    </Routes>
  );
};

export default AppRoutes;
