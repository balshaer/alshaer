import asyncHandler from "express-async-handler";
import ThemeColor from "../models/ThemeColor.js";

/**
 * -------------------------------------------------
 *@desc   : Get all theme colors
 *@router : /api/theme-colors
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getThemeColors = asyncHandler(async (req, res) => {
  try {
    const colors = await ThemeColor.find();
    res.status(200).json(colors);
  } catch (error) {
    console.error("Error fetching theme colors:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * -------------------------------------------------
 *@desc   : Create a new theme color
 *@router : /api/theme-colors
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const createThemeColor = asyncHandler(async (req, res) => {
  const { mode, colors } = req.body;

  if (!mode || !colors) {
    return res.status(400).json({ message: "Mode and colors are required" });
  }

  const newThemeColor = new ThemeColor({ mode, colors });

  try {
    await newThemeColor.save();
    res.status(201).json(newThemeColor);
  } catch (error) {
    console.error("Error creating theme color:", error);
    res.status(400).json({ message: error.message });
  }
});

/**
 * -------------------------------------------------
 *@desc   : Update an existing theme color
 *@router : /api/theme-colors/:id
 *@method : PUT
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const updateThemeColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { colors } = req.body;

  if (!colors) {
    return res.status(400).json({ message: "Colors are required" });
  }

  try {
    const updatedColor = await ThemeColor.findByIdAndUpdate(
      id,
      { colors },
      { new: true }
    );
    if (!updatedColor) {
      return res.status(404).json({ message: "Theme color not found" });
    }
    res.status(200).json(updatedColor);
  } catch (error) {
    console.error("Error updating theme color:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * -------------------------------------------------
 *@desc   : Delete a theme color
 *@router : /api/theme-colors/:id
 *@method : DELETE
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const deleteThemeColor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedColor = await ThemeColor.findByIdAndDelete(id);
    if (!deletedColor) {
      return res.status(404).json({ message: "Theme color not found" });
    }
    res.status(200).json({ message: "Theme color deleted successfully" });
  } catch (error) {
    console.error("Error deleting theme color:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export { getThemeColors, createThemeColor, updateThemeColor, deleteThemeColor };
