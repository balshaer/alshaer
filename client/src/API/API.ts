/**
 * Base URL for the API.
 */
export const baseUrl = "http://localhost:5000/api";

/**
 * API endpoints for admin management, projects, works, and social links.
 */
export const endpoints = {
  // Admin authentication and management endpoints
  loginAuth: `${baseUrl}/admin/login`,
  adminCreate: `${baseUrl}/admin/create`,
  getAdmin: `${baseUrl}/admin`,
  getCurrentAdmin: `${baseUrl}/admin/`,
  getAdminDashboard: `${baseUrl}/admin/dashboard`,

  // Projects management endpoints
  getAllProjects: `${baseUrl}/projects`,
  addProject: `${baseUrl}/projects/add`,
  getProjectOptions: `${baseUrl}/projects/options`,
  deleteProject: `${baseUrl}/projects/`,
  deleteAllProjects: `${baseUrl}/projects/`,
  archiveProject: `${baseUrl}/projects/archive/`,
  archiveAllProject: `${baseUrl}/projects/archive/`,
  unarchiveProject: `${baseUrl}/projects/unarchive/`,
  unarchiveAllProject: `${baseUrl}/projects/unarchive/`,
  getProjectById: `${baseUrl}/project/`, // Use project ID in the request params
  updateProject: `${baseUrl}/project`,
  projectsCount: `${baseUrl}/projects/count`,
  projectsArchiveCount: `${baseUrl}/projects/archive/count`,
  projectsUnArchiveCount: `${baseUrl}/projects/unArchive/count`,
  getArchivedProjects: `${baseUrl}/projects/archived/`,
  getUnArchivedProjects: `${baseUrl}/projects/unarchived/`,
  updateProjectOrder: `${baseUrl}/projects/update-order`,

  // Works (formerly experiences) management endpoints
  getAllWorks: `${baseUrl}/work`,
  getWorkById: `${baseUrl}/work/`, // Use work ID in the request params
  getArchivedWorks: `${baseUrl}/work/archived/`,
  getUnArchivedWorks: `${baseUrl}/work/unarchived/`,
  addWork: `${baseUrl}/work/add`,
  deleteWork: `${baseUrl}/work/delete/`, // Use work ID in the request params
  deleteAllWorks: `${baseUrl}/work/`,
  archiveWork: `${baseUrl}/work/archive/`, // Use work ID in the request params
  archiveAllWork: `${baseUrl}/work/archive/`,
  unarchiveWork: `${baseUrl}/work/unarchive/`, // Use work ID in the request params
  unarchiveAllWork: `${baseUrl}/work/unarchive/`,
  updateWork: `${baseUrl}/work/update/`, // Use work ID in the request params
  worksCount: `${baseUrl}/work/count`,
  worksArchiveCount: `${baseUrl}/work/archive/count`,
  worksUnArchiveCount: `${baseUrl}/work/unarchive/count`,

  // Themes management endpoints
  getTheme: `${baseUrl}/themes/`, // Use theme mode (dark or light) in the request params
  updateTheme: `${baseUrl}/themes/`, // Use theme mode (dark or light) in the request params

  // Social links management endpoints
  getSocialLinks: `${baseUrl}/social/`,
  updateSocialLinks: `${baseUrl}/social/edit/`,
};
