const express = require("express");
const {
  addSocialLink,
  getSocialLinks,
  updateSocialLink,
  deleteSocialLink,
  deleteAllSocialLinks,
} = require("../controllers/socialLinksController");

const router = express.Router();

router.post("/social/add", addSocialLink);
router.get("/social", getSocialLinks);
router.put("/social/update/:id", updateSocialLink);
router.delete("/social/delete/:id", deleteSocialLink);
router.delete("/social/delete-all", deleteAllSocialLinks);
module.exports = router;
