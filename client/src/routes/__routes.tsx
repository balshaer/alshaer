import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectsPage from "@/pages/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../admin/pages/AdminPage";
import ProjectsAdminPage from "@/admin/pages/ProjectsAdminPage";
import SocialLinksAdminPage from "@/admin/pages/SocialLinksAdminPage";
import ThemesAdminPage from "@/admin/pages/ThemesAdminPage";
import LoginAdminPage from "@/admin/pages/LoginAdminPage";
import AdminLayout from "@/components/admin/layouts/AdminLayout";
import AddProject from "@/components/admin/layouts/AddProject";
import Addwork from "@/components/admin/layouts/AddWork";
import EditProject from "@/components/admin/layouts/EditProject";
import Editwork from "@/components/admin/layouts/EditWork";
import MailsAdminPage from "@/admin/pages/MailsAdminPage";
import ContentAdminPage from "@/admin/pages/ContentAdminPage";
import Requireauth from "@/components/featuers/Requireauth";
import WorkPage from "@/pages/WorkPage";
import ProfileAdminPage from "@/admin/pages/ProfileAdminPage";
import DeletedItemsAdminPage from "@/admin/pages/DeletedItemsAdminPage";
import WorkAdminPage from "@/admin/pages/WorkAdminPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/work" element={<WorkPage />} />

      {/* admin */}
      <Route element={<Requireauth />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path="/admin/mails" element={<MailsAdminPage />} />
          {/* projects  */}
          <Route path="/admin/projects" element={<ProjectsAdminPage />} />
          <Route path="/admin/project/add" element={<AddProject />} />
          <Route path="/admin/project/edit/:id" element={<EditProject />} />
          {/* Updated Route */}
          {/* work  */}
          <Route path="/admin/works" element={<WorkAdminPage />} />
          <Route path="/admin/works/add" element={<Addwork />} />
          <Route path="/admin/works/edit/:id" element={<Editwork />} />
          <Route path="/admin/socialLinks" element={<SocialLinksAdminPage />} />
          <Route path="/admin/themes" element={<ThemesAdminPage />} />
          <Route path="/admin/content" element={<ContentAdminPage />} />
          <Route
            path="/admin/deletedItems"
            element={<DeletedItemsAdminPage />}
          />
          <Route path="/admin/profile/" element={<ProfileAdminPage />} />
        </Route>
      </Route>

      <Route path="/admin/login" element={<LoginAdminPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
