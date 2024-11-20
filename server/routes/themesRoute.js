const express = require("express");
const {
  addTheme,
  getAllThemes,
  getThemeByName,
  updateTheme,
  deleteTheme,
} = require("../controllers/themeController");
const router = express.Router();

// Route to add a new theme
router.post("/add", addTheme);

// Route to get all themes
router.get("/", getAllThemes);

// Route to get a theme by name
router.get("/:name", getThemeByName);

// Route to update a theme by name
router.put("/:name", updateTheme);

// Route to delete a theme by name
router.delete("/delete/:name", deleteTheme);

module.exports = router;
