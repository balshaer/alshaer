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
import AdminLayout from "@/components/admin/layouts/AdminLayout";
import AddProject from "@/components/admin/layouts/AddProject";
import AddExperience from "@/components/admin/layouts/AddExperience";
import EditProject from "@/components/admin/layouts/EditProject";
import EditExperience from "@/components/admin/layouts/EditExperience";
import MailsAdminPage from "@/admin/pages/MailsAdminPage";
import ContentAdminPage from "@/admin/pages/ContentAdminPage";
import Requireauth from "@/components/featuers/Requireauth";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />

      {/* admin */}
      <Route element={<Requireauth />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path="/admin/mails" element={<MailsAdminPage />} />
          {/* projects  */}
          <Route path="/admin/projects" element={<ProjectsAdminPage />} />
          <Route path="/admin/project/add" element={<AddProject />} />
          <Route
            path="/admin/project/edit/:id"
            element={<EditProject />}
          />{" "}
          {/* Updated Route */}
          {/* experience  */}
          <Route path="/admin/experience" element={<ExperienceAdminPage />} />
          <Route path="/admin/experience/add" element={<AddExperience />} />
          <Route path="/admin/experience/edit" element={<EditExperience />} />
          <Route path="/admin/socialLinks" element={<SocialLinksAdminPage />} />
          <Route path="/admin/themes" element={<ThemesAdminPage />} />
          <Route path="/admin/content" element={<ContentAdminPage />} />
        </Route>
      </Route>

      <Route path="/admin/login" element={<LoginAdminPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
