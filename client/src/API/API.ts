export const baseUrl = "http://localhost:5000/api";

export const endpoints = {
  loginAuth: `${baseUrl}/admin/login`,
  adminCreate: `${baseUrl}/admin/create`,
  getAdmin: `${baseUrl}/admin`,
  getAdminDashboard: `${baseUrl}/admin/dashboard`,
  getAllProjects: `${baseUrl}/projects`,
  addProject: `${baseUrl}/projects/add`,
  getProjectOptions: `${baseUrl}/projects/options`,
  deleteProject: `${baseUrl}/projects/:id`,
  deleteAllProjects: `${baseUrl}/projects/`,
  getProjectById: `${baseUrl}/project/`, // :id from params
  updateProject: `${baseUrl}/project`,
};
