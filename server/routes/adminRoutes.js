const {
  loginController,
  createAdminController,
  getAdminsController,
  getAdminsDashboard,
} = require("../controllers/adminController");
const {
  addProject,
  getProjects,
} = require("../controllers/projectsController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/login", loginController);
router.post("/create", verifyToken, createAdminController);
router.get("/", getAdminsController);
router.get("/dashboard", verifyToken, getAdminsDashboard);

module.exports = router;
