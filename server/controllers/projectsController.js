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

  if (!projects) {
    return res.status(404).json({ message: "Projects not found" });
  }

  return res.status(200).json(projects);
});

/**
 * -------------------------------------------------
 *@desc   : get archived projects
 *@router : /api/project/archived
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getArchivedProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ archived: true });

  if (!projects) {
    return res.status(404).json({ message: "Projects not found" });
  }

  return res.status(200).json(projects);
});

/**
 * -------------------------------------------------
 *@desc   : get archived projects
 *@router : /api/project/archived
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getUnArchivedProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ archived: false });
  if (!projects) {
    return res.status(404).json({ message: "Projects not found" });
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
 *@router : /api/project/archive/:id
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const archiveProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  project.archived = true;

  await project.save();
  res.status(200).json({ message: "Project archived successfully" });
});

/**
 * -------------------------------------------------
 *@desc   : archive all projects
 *@router : /api/project/archive/
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/

const archiveAllProject = asyncHandler(async (req, res) => {
  const result = await Project.updateMany({}, { $set: { archived: true } });
  if (result.modifiedCount === 0) {
    return res.status(404).json({ message: "No projects found to delete" });
  }

  res.status(200).json({
    message: `${result.modifiedCount} projects archived successfully`,
  });
});

/**
 * -------------------------------------------------
 *@desc   : unarchive project
 *@router : /api/project/unarchive/:id
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const unarchiveProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  project.archived = false;
  await project.save();
  res.status(200).json({ message: "Project unarchived successfully" });
});

/**
 * -------------------------------------------------
 *@desc   : unarchive all projects
 *@router : /api/project/unarchive
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const unarchiveAllProject = asyncHandler(async (req, res) => {
  const result = await Project.updateMany({}, { $set: { archived: false } });

  if (result.modifiedCount === 0) {
    return res.status(404).json({ message: "No projects found to archive" });
  }
  res.status(200).json({
    message: `${result.modifiedCount} projects unarchived successfully`,
  });
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
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.status(200).json({ message: "Project deleted successfully" });
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
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const project = await Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      links: req.body.links,
      options: req.body.options,
      badge: req.body.badge,
    },
    { new: true }
  );

  if (!project) {
    return res
      .status(404)
      .json({ message: "Project not found", id: req.params.id });
  }

  return res.status(200).json(project);
});

/**
 * -------------------------------------------------
 *@desc   : update project
 *@router : /api/projects/count
 *@method : GET
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const projectsCount = asyncHandler(async (req, res) => {
  const projects = await Project.countDocuments();

  if (!projects) {
    return res.status(404).json({ message: "No projects found" });
  }
  res.status(200).json(projects);
});

/**
 * -------------------------------------------------
 *@desc   : update project
 *@router : /api/projects/count
 *@method : GET
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const projectsArchivedCount = asyncHandler(async (req, res) => {
  const archiveProjects = await Project.countDocuments({ archived: false });

  if (archiveProjects === "0") {
    return res.status(404).json({ message: "No projects found" });
  }
  res.status(200).json(archiveProjects);
});

/**
 * -------------------------------------------------
 *@desc   : update the order of projects
 *@router : /api/projects/update-order
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const updateProjectOrder = asyncHandler(async (req, res) => {
  const { projects } = req.body;

  if (!projects || !Array.isArray(projects)) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  const updatePromises = projects.map((id, index) => {
    return Project.findByIdAndUpdate(id, { order: index }, { new: true });
  });

  try {
    await Promise.all(updatePromises);
    res.status(200).json({ message: "project order updated successfully" });
  } catch (error) {
    console.error("Error updating project order:", error);
    res.status(500).json({ message: "Server error" });
  }
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
  projectsCount,
  projectsArchivedCount,
  unarchiveProject,
  unarchiveAllProject,
  getArchivedProjects,
  getUnArchivedProjects,
  updateProjectOrder,
};
