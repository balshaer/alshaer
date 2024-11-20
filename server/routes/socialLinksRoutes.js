const {
  getSocialLinks,
  addSocialLinks,
  updateSocialLinks,
} = require("../controllers/socialLinksController");
require("../controllers/workController");

const router = require("express").Router();

router.get("/social", getSocialLinks);
router.post("/social", addSocialLinks);
router.put("/social/edit", updateSocialLinks);

module.exports = router;
