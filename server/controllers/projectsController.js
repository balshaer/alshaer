const asyncHandler = require("express-async-handler");
const { Project, projectValidation } = require("../models/ProjectsModel");

/**
 * -------------------------------------------------
 *@desc   : add a new project
 *@router : /api/project/add
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const addProject = asyncHandler(async (req, res) => {
  const { error } = projectValidation(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const findProject = await Project.findOne({ title: req.body.title });

  if (findProject) {
    return res.status(400).json({ message: "Project already exists" });
  }

  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    links: req.body.links || [],
    badge: req.body.badge || [],
  });
  try {
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * -------------------------------------------------
 *@desc   : get project by id
 *@router : /api/project/:id
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getProjectsById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  return res.status(200).json(project);
});

/**
 * -------------------------------------------------
 *@desc   : get all projects
 *@router : /api/project/
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  if (!projects.length) {
    // Check for empty array instead of null
    return res.status(404).json({ message: "No projects yet" });
  }

  return res.status(200).json(projects);
});

/**
 * -------------------------------------------------
 *@desc   : get project options
 *@router : /api/project/options
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getProjectsOptions = asyncHandler(async (req, res) => {
  const staticOptions = [
    { value: "website", label: "Website" },
    { value: "desktop", label: "Desktop" },
    { value: "mobile", label: "Mobile" },
    { value: "others", label: "Others" },
  ];

  const projects = await Project.find({}, "option");

  const uniqueOptions = Array.from(
    new Set(projects.flatMap((project) => project.option))
  ).map((option) => ({ value: option, label: option }));

  const combinedOptions = [...staticOptions, ...uniqueOptions];

  return res.status(200).json(combinedOptions);
});

/**
 * -------------------------------------------------
 *@desc   : archive project
 *@router : /api/project/:id
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const archiveProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.status(200).json({ message: "Project deleted successfully" });
});

/**
 * -------------------------------------------------
 *@desc   : archive all projects
 *@router : /api/project/
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const archiveAllProject = asyncHandler(async (req, res) => {
  const result = await Project.deleteMany({});

  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "No projects found to delete" });
  }

  res
    .status(200)
    .json({ message: `${result.deletedCount} projects deleted successfully` });
});

/**
 * -------------------------------------------------
 *@desc   : delete project from database
 *@router : /api/project/db/:id
 *@method : DELETE
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const deleteProject = asyncHandler(async (req, res) => {
  const result = await Project.deleteMany({});

  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "No projects found to delete" });
  }
});

/**
 * -------------------------------------------------
 *@desc   : delete all projects from database
 *@router : /api/project/db
 *@method : DELETE
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const deleteAllProjects = asyncHandler(async (req, res) => {
  const result = await Project.deleteMany({});

  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "No projects found to delete" });
  }

  res
    .status(200)
    .json({ message: `${result.deletedCount} projects deleted successfully` });
});

/**
 * -------------------------------------------------
 *@desc   : update project
 *@router : /api/project/:id
 *@method : PUT
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const updateProject = asyncHandler(async (req, res) => {
  const { error } = projectValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      links: req.body.links,
      options: req.body.options,
      badge: req.body.badge,
    },
    {
      new: true,
    }
  );

  if (!updatedProject) {
    return res.status(404).send("Project not found");
  }

  res.status(200).send(updatedProject);
});

module.exports = {
  addProject,
  getProjects,
  getProjectsById,
  getProjectsOptions,
  archiveProject,
  archiveAllProject,
  updateProject,
  deleteAllProjects,
  deleteProject,
};
