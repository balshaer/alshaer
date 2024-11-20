const {
  getWorks,
  getWorksById,
  getArchivedWorks,
  getUnArchivedWorks,
  addWork,
  archiveWork,
  archiveAllWork,
  unarchiveWork,
  unarchiveAllWork,
  deleteWork,
  deleteAllWorks,
  updateWork,
  worksCount,
  worksArchivedCount,
  updateWorkOrder,
  worksUnarchivedCount,
} = require("../controllers/workController");

const router = require("express").Router();

// get works
router.get("/work/", getWorks);
router.get("/work/archived", getArchivedWorks);
router.get("/work/unarchived", getUnArchivedWorks);

router.get("/work/:id", getWorksById);

// add new work
router.post("/work/add", addWork);

// archive works
router.post("/work/archive/:id", archiveWork);
router.post("/work/archive/", archiveAllWork);

// unarchive works
router.post("/work/unarchive/:id", unarchiveWork);
router.post("/work/unarchive/", unarchiveAllWork);

// delete work
router.delete("/work/delete/:id", deleteWork);
router.delete("/work/", deleteAllWorks);

// update work
router.put("/work/update/:id", updateWork);

//work count
router.get("/works/count", worksCount);
router.get("/works/count", worksCount);
router.post("/works/update-order", updateWorkOrder);

router.get("/work/archive/count", worksArchivedCount);
router.get("/work/unarchive/count", worksUnarchivedCount);

module.exports = router;
