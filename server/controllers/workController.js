const asyncHandler = require("express-async-handler");
const { Work, workValidation } = require("../models/WorkModel");
const { default: mongoose } = require("mongoose");
const { Admin } = require("../models/AdminModel");

/**
 * -------------------------------------------------
 *@desc   : add a new work
 *@router : /api/work/add
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const addWork = asyncHandler(async (req, res) => {
  const { error } = workValidation(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const findWork = await Work.findOne({ title: req.body.title });

  if (findWork) {
    return res.status(400).json({ message: "Work already exists" });
  }

  const newWork = new Work({
    title: req.body.title,
    description: req.body.description,
    company: req.body.company,
    links: req.body.links || [],
    date: req.body.date || [],
    badge: req.body.badge || [],
  });

  try {
    await newWork.save();
    res.status(200).json(newWork);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * -------------------------------------------------
 *@desc   : get all works
 *@router : /api/work/
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getWorks = asyncHandler(async (req, res) => {
  const works = await Work.find();
  if (!works.length) {
    return res.status(404).json({ message: "No works yet" });
  }

  return res.status(200).json(works);
});

/**
 * -------------------------------------------------
 *@desc   : get works by id
 *@router : /api/work/:id
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getWorksById = asyncHandler(async (req, res) => {
  const works = await Work.findById(req.params.id);
  if (!works) {
    return res.status(404).json({ message: "No works yet" });
  }

  return res.status(200).json(works);
});

/**
 * -------------------------------------------------
 *@desc   : get archived works
 *@router : /api/work/archived
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getArchivedWorks = asyncHandler(async (req, res) => {
  const works = await Work.find({ archived: true });
  if (!works) {
    return res.status(404).json({ message: "works not found" });
  }

  return res.status(200).json(works);
});

/**
 * -------------------------------------------------
 *@desc   : get unarchived works
 *@router : /api/work/unarchived
 *@method : GET
 *@access : PUBLIC
 *-------------------------------------------------
 **/
const getUnArchivedWorks = asyncHandler(async (req, res) => {
  const work = await Work.find({ archived: false });
  if (!work) {
    return res.status(404).json({ message: "No work found " });
  }

  res.status(200).json(work);
});

/**
 * -------------------------------------------------
 *@desc   : archive work
 *@router : /api/work/archive/:id
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const archiveWork = asyncHandler(async (req, res) => {
  const workItem = await Work.findById(req.params.id);

  if (!workItem) {
    return res.status(404).json({ message: "Work not found" });
  }

  workItem.archived = true;

  await workItem.save();
  res.status(200).json({ message: "Work archived successfully" });
});

/**
 * -------------------------------------------------
 *@desc   : archive all works
 *@router : /api/work/archive/
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const archiveAllWork = asyncHandler(async (req, res) => {
  const result = await Work.updateMany({}, { $set: { archived: true } });
  if (result.modifiedCount === 0) {
    return res.status(404).json({ message: "No works found to archive" });
  }

  res.status(200).json({
    message: `${result.modifiedCount} works archived successfully`,
  });
});

/**
 * -------------------------------------------------
 *@desc   : unarchive work
 *@router : /api/work/unarchive/:id
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const unarchiveWork = asyncHandler(async (req, res) => {
  const workItem = await Work.findById(req.params.id);

  if (!workItem) {
    return res.status(404).json({ message: "Work not found" });
  }

  workItem.archived = false;
  await workItem.save();
  res.status(200).json({ message: "Work unarchived successfully" });
});

/**
 * -------------------------------------------------
 *@desc   : unarchive all works
 *@router : /api/work/unarchive
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const unarchiveAllWork = asyncHandler(async (req, res) => {
  const result = await Work.updateMany({}, { $set: { archived: false } });

  if (result.modifiedCount === 0) {
    return res.status(404).json({ message: "No works found to unarchive" });
  }

  res.status(200).json({
    message: `${result.modifiedCount} works unarchived successfully`,
  });
});

/**
 * -------------------------------------------------
 *@desc   : delete work from database
 *@router : /api/work/db/:id
 *@method : DELETE
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const deleteWork = asyncHandler(async (req, res) => {
  const workItem = await Work.findByIdAndDelete(req.params.id); // Changed from 'work' to 'workItem'

  if (!workItem) {
    return res.status(404).json({ message: "Work not found" });
  }

  res.status(200).json({ message: "Work deleted successfully" });
});

/**
 * -------------------------------------------------
 *@desc   : delete all works from database
 *@router : /api/work/db
 *@method : DELETE
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const deleteAllWorks = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (!admin) {
    return res
      .status(404)
      .json({ message: "Please register as an administrator" });
  }

  const result = await Work.deleteMany({});

  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "No works found to delete" });
  }

  res
    .status(200)
    .json({ message: `${result.deletedCount} works deleted successfully` });
});

/**
 * -------------------------------------------------
 *@desc   : update work
 *@router : /api/work/:id
 *@method : PUT
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const updateWork = asyncHandler(async (req, res) => {
  const { error } = workValidation(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const workItem = await Work.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      company: req.body.company,
      links: req.body.links,
      badge: req.body.badge,
      date: req.body.date,
    },
    { new: true }
  );

  if (!workItem) {
    return res
      .status(404)
      .json({ message: "Work not found", id: req.params.id });
  }

  return res.status(200).json(workItem);
});

/**
 * -------------------------------------------------
 *@desc   : update the order of works
 *@router : /api/work/update-order
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const updateWorkOrder = asyncHandler(async (req, res) => {
  const { works } = req.body;

  if (!works || !Array.isArray(works)) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  const updatePromises = works.map((id, index) => {
    return Work.findByIdAndUpdate(id, { order: index }, { new: true });
  });

  try {
    await Promise.all(updatePromises);
    res.status(200).json({ message: "Work order updated successfully" });
  } catch (error) {
    console.error("Error updating work order:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * -------------------------------------------------
 *@desc   : count works
 *@router : /api/works/count
 *@method : GET
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const worksCount = asyncHandler(async (req, res) => {
  const works = await Work.countDocuments();

  if (works === 0) {
    return res.status(404).json({ message: "No works found" });
  }
  res.status(200).json(works);
});

/**
 * -------------------------------------------------
 *@desc   : count archived works
 *@router : /api/works/archived/count
 *@method : GET
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const worksArchivedCount = asyncHandler(async (req, res) => {
  const archivedWorks = await Work.countDocuments({ archived: true });

  if (archivedWorks === 0) {
    return res.status(404).json({ message: "No archived works found" });
  }
  res.status(200).json(archivedWorks);
});

/**
 * -------------------------------------------------
 *@desc   : count unarchived works
 *@router : /api/works/unarchived/count
 *@method : GET
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const worksUnarchivedCount = asyncHandler(async (req, res) => {
  const unarchivedWorks = await Work.countDocuments({ archived: false });

  if (unarchivedWorks === 0) {
    return res.status(404).json({ message: "No unarchived works found" });
  }
  res.status(200).json(unarchivedWorks);
});

module.exports = {
  addWork,
  getWorks,
  getWorksById,
  archiveWork,
  archiveAllWork,
  updateWork,
  deleteAllWorks,
  deleteWork,
  worksCount,
  worksArchivedCount,
  unarchiveWork,
  unarchiveAllWork,
  getArchivedWorks,
  getUnArchivedWorks,
  updateWorkOrder,
  worksUnarchivedCount,
};
