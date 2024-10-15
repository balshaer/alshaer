const { Admin } = require("../models/AdminModel");

async function verifyDeleteAllProjects(req, res, next) {
  const OTPCODE = Admin.find({ otp: req.body.otp });

  if (!OTPCODE) {
    return res.status(404).json({ message: "OTP code not found" });
  }

  next();
}

module.exports = { verifyDeleteAllProjects };
