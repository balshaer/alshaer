const asyncHandler = require("express-async-handler");
const { Theme, themeValidation } = require("../models/Themes");

/**
 * -------------------------------------------------
 * @desc   : add a new theme
 * @router : /api/themes/add
 * @method : POST
 * @access : PRIVATE
 * -------------------------------------------------
 */
const addTheme = asyncHandler(async (req, res) => {
  const { error } = themeValidation(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const findTheme = await Theme.findOne({ name: req.body.name });

  if (findTheme) {
    return res.status(400).json({ message: "Theme already exists" });
  }

  const newTheme = new Theme({
    name: req.body.name,
    colors: req.body.colors,
  });

  try {
    await newTheme.save();
    res.status(200).json(newTheme);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * -------------------------------------------------
 * @desc   : get all themes
 * @router : /api/themes/
 * @method : GET
 * @access : PUBLIC
 * -------------------------------------------------
 */
const getAllThemes = asyncHandler(async (req, res) => {
  const themes = await Theme.find({});
  res.status(200).json(themes);
});

/**
 * -------------------------------------------------
 * @desc   : get a theme by name
 * @router : /api/themes/:name
 * @method : GET
 * @access : PUBLIC
 * -------------------------------------------------
 */
const getThemeByName = asyncHandler(async (req, res) => {
  const theme = await Theme.findOne({ name: req.params.name });

  if (!theme) {
    return res.status(404).json({ message: "Theme not found" });
  }

  res.status(200).json(theme);
});

/**
 * -------------------------------------------------
 * @desc   : update a theme by name
 * @router : /api/themes/:name
 * @method : PUT
 * @access : PRIVATE
 * -------------------------------------------------
 */
const updateTheme = asyncHandler(async (req, res) => {
  const { error } = themeValidation(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let theme = await Theme.findOne({ name: req.params.name });

  if (!theme) {
    theme = new Theme({
      name: req.params.name,
      colors: req.body.colors,
    });
  } else {
    theme.colors = req.body.colors;
  }

  try {
    await theme.save();
    res.status(200).json(theme);
  } catch (error) {
    console.error("Error saving theme:", error);
    res.status(500).json({ message: "Error saving theme" });
  }
});

/**
 * -------------------------------------------------
 * @desc   : delete a theme by name
 * @router : /api/themes/delete/:name
 * @method : DELETE
 * @access : PRIVATE
 * -------------------------------------------------
 */
const deleteTheme = asyncHandler(async (req, res) => {
  const theme = await Theme.findOneAndDelete({ name: req.params.name });

  if (!theme) {
    return res.status(404).json({ message: "Theme not found" });
  }

  res.status(200).json({ message: "Theme deleted successfully" });
});

module.exports = {
  addTheme,
  getAllThemes,
  getThemeByName,
  updateTheme,
  deleteTheme,
};
