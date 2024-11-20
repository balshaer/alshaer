const {
  addProject,
  getProjects,
  getProjectsOptions,
  updateProject,
  getProjectsById,
  archiveProject,
  archiveAllProject,
  projectsCount,
  deleteAllProjects,
  deleteProject,
  unarchiveProject,
  unarchiveAllProject,
  projectsArchivedCount,
  getArchivedProjects,
  getUnArchivedProjects,
  updateProjectOrder,
} = require("../controllers/projectsController");

const router = require("express").Router();

// get projects
router.get("/projects/", getProjects);
router.get("/project/:id", getProjectsById);
router.get("/projects/options", getProjectsOptions);
router.get("/projects/archived", getArchivedProjects);
router.get("/projects/unarchived", getUnArchivedProjects);

// add new project
router.post("/projects/add", addProject);

// archive projects
router.post("/projects/archive/:id", archiveProject);
router.post("/projects/archive/", archiveAllProject);

// unarchive projects
router.post("/projects/unarchive/:id", unarchiveProject);
router.post("/projects/unarchive/", unarchiveAllProject);

// delete projects
router.delete("/projects/:id", deleteProject);
router.delete("/projects/", deleteAllProjects);

// update project
router.put("/project/:id", updateProject);

//projects count
router.get("/projects/count", projectsCount);
router.get("/projects/archive/count", projectsArchivedCount);

router.post("/projects/update-order", updateProjectOrder);

module.exports = router;
