const {
  addProject,
  getProjects,
  getProjectsOptions,
  updateProject,
  getProjectsById,
  archiveProject,
  archiveAllProject,
} = require("../controllers/projectsController");
const {
  verifyDeleteAllProjects,
} = require("../middlewares/verifyDeleteAllProjects");

const router = require("express").Router();

// get projects
router.get("/projects/", getProjects);
router.get("/project/:id", getProjectsById);
router.get("/projects/options", getProjectsOptions);

// add new project
router.post("/projects/add", addProject);

// archive projects
router.post("/projects/archive/:id", archiveProject);
router.post(
  "/projects/archive/all",
  verifyDeleteAllProjects,
  archiveAllProject
);

// update project
router.put("/project/:id", updateProject);

module.exports = router;
