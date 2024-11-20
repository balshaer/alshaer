const asyncHandler = require("express-async-handler");

/**
 * -------------------------------------------------
 *@desc   : add a new description
 *@router : /api/content
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const addContent = asyncHandler(async (req, res) => {});

module.exports = {
  addContent,
};
