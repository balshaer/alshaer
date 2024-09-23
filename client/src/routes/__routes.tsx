import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectsPage from "@/pages/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../admin/pages/AdminPage";
import ProjectsAdminPage from "@/admin/pages/ProjectsAdminPage";
import ExperienceAdminPage from "@/admin/pages/ExperienceAdminPage";
import SocialLinksAdminPage from "@/admin/pages/SocialLinksAdminPage";
import ThemesAdminPage from "@/admin/pages/ThemesAdminPage";
import LoginAdminPage from "@/admin/pages/LoginAdminPage";
import AdminLayout from "@/admin/components/layouts/AdminLayout";
import AddProject from "@/admin/components/layouts/AddProject";
import AddExperience from "@/admin/components/layouts/AddExperience";
import EditProject from "@/admin/components/layouts/EditProject";
import EditExperience from "@/admin/components/layouts/EditExperience";
import MailsAdminPage from "@/admin/pages/MailsAdminPage";
import ContentAdminPage from "@/admin/pages/ContentAdminPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />

      {/* admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
        <Route path="/admin/mails" element={<MailsAdminPage />} />

        {/* projects  */}
        <Route path="/admin/projects" element={<ProjectsAdminPage />} />
        <Route path="/admin/project/add" element={<AddProject />} />
        <Route path="/admin/project/edit" element={<EditProject />} />

        {/* experience  */}
        <Route path="/admin/experience" element={<ExperienceAdminPage />} />
        <Route path="/admin/experience/add" element={<AddExperience />} />
        <Route path="/admin/experience/edit" element={<EditExperience />} />

        <Route path="/admin/socialLinks" element={<SocialLinksAdminPage />} />
        <Route path="/admin/themes" element={<ThemesAdminPage />} />
        <Route path="/admin/content" element={<ContentAdminPage />} />
      </Route>

      <Route path="/admin/login" element={<LoginAdminPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
