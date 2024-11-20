import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Requireauth from "@/components/featuers/Requireauth";

// common
const NotFoundPage = React.lazy(() => import("@/pages/common/NotFoundPage"));

// website
const HomePage = React.lazy(() => import("@/pages/website/HomePage"));
const ProjectsPage = React.lazy(() => import("@/pages/website/ProjectsPage"));

// admin
const SocialLinksAdminPage = React.lazy(
  () => import("@/pages/admin/SocialLinksAdminPage"),
);
// const ThemesAdminPage = React.lazy(
//   () => import("@/pages/admin/ThemesAdminPage"),
// );
const ContentAdminPage = React.lazy(
  () => import("@/pages/admin/ContentAdminPage"),
);
const DeletedItemsAdminPage = React.lazy(
  () => import("@/pages/admin/DeletedItemsAdminPage"),
);
const ProfileAdminPage = React.lazy(
  () => import("@/pages/admin/ProfileAdminPage"),
);
const LoginAdminPage = React.lazy(() => import("@/pages/admin/LoginAdminPage"));
const AdminPage = React.lazy(() => import("@/pages/admin/AdminPage"));
const MailsAdminPage = React.lazy(() => import("@/pages/admin/MailsAdminPage"));
const ProjectsAdminPage = React.lazy(
  () => import("@/pages/admin/ProjectsAdminPage"),
);
const WorkAdminPage = React.lazy(() => import("@/pages/admin/WorkAdminPage"));
// const Requireauth = React.lazy(
//   () => import("@/components/featuers/Requireauth"),
// );
const AdminLayout = React.lazy(() => import("@/components/admin/AdminLayout"));
const WorkPage = React.lazy(() => import("@/pages/website/WorkPage"));
const AddProject = React.lazy(() => import("@/components/admin/AddProject"));
const EditProject = React.lazy(() => import("@/components/admin/EditProject"));
const AddWork = React.lazy(() => import("@/components/admin/AddWork"));
const EditWork = React.lazy(() => import("@/components/admin/EditWork"));

const AppRoutes: React.FC = () => {
  const LoadingFallback = () => (
    <motion.div
      className="flex h-screen items-center justify-center bg-[var(--background)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-base text-[var(--headline)]">Loading...</div>
    </motion.div>
  );

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/work" element={<WorkPage />} />
        {/* admin */}
        <Route element={<Requireauth />}>
        <Route path="/admin" element={<AdminLayout isOpen={undefined} />}>
          <Route index element={<AdminPage />} />
          <Route path="/admin/mails" element={<MailsAdminPage />} />
          {/* projects  */}
          <Route path="/admin/projects" element={<ProjectsAdminPage />} />
          <Route path="/admin/project/add" element={<AddProject />} />
          <Route path="/admin/project/edit/:id" element={<EditProject />} />
          {/* Updated Route */}
          {/* work  */}
          <Route path="/admin/works" element={<WorkAdminPage />} />
          <Route path="/admin/works/add" element={<AddWork />} />
          <Route path="/admin/works/edit/:id" element={<EditWork />} />
          <Route path="/admin/socialLinks" element={<SocialLinksAdminPage />} />
          {/* <Route path="/admin/themes" element={<ThemesAdminPage />} /> */}
          <Route path="/admin/content" element={<ContentAdminPage />} />
          <Route
            path="/admin/deletedItems"
            element={<DeletedItemsAdminPage />}
          />
          <Route path="/admin/profile/" element={<ProfileAdminPage />} />
        </Route>

        </Route>
        {/* </Route> */}

        <Route path="/admin/login" element={<LoginAdminPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
