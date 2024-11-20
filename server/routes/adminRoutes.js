const {
  loginController,
  createAdminController,
  getAdminsController,
  getAdminsDashboard,
  getCurrentAdmin,
  uploadProfilePhoto,
  getAdminOTP,
} = require("../controllers/adminController");
const photoUpload = require("../middlewares/uploadImage");

const router = require("express").Router();

router.post("/login", loginController);
router.post("/create", createAdminController);
router.get("/admins", getAdminsController);
router.get("/:id", getCurrentAdmin);
router.get("/dashboard", getAdminsDashboard);
router.get("/otp/:id", getAdminOTP);

router.post("/profile-photo/", photoUpload.single("image"), uploadProfilePhoto);
module.exports = router;
