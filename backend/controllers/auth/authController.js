const asyncHandler = require("express-async-handler");
const { User, userValidation } = require("../../models/User");

const adminController = asyncHandler(async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res
      .status(403)
      .json({ message: "Your are not allowed to access this page." });
  }
});

module.exports = adminController;
