const asyncHandler = require("express-async-handler");
const { Admin, authValidation } = require("../models/AdminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/**
 * -------------------------------------------------
 *@desc   : Login to admin dashboard
 *@router : /api/admin/login
 *@method : POST
 *@access : private
 *-------------------------------------------------
 **/

const loginController = asyncHandler(async (req, res) => {
  const { error } = authValidation(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let admin = await Admin.findOne({ email: req.body.email });

  if (!admin) {
    return res.status(400).json({ message: "Email or password is wrong" });
  }

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    admin.password
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Email or password is wrong" });
  }

  const token = jwt.sign({ id: req.body._id }, process.env.SECRET_KEY, {
    expiresIn: "360d",
  });

  res.status(200).json({
    token,
  });
});

/**
 * -------------------------------------------------
 *@desc   : create a admin account
 *@router : /api/admin/create
 *@method : POST
 *@access : private
 *-------------------------------------------------
 **/

const createAdminController = asyncHandler(async (req, res) => {
  const { error } = authValidation(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let admin = await Admin.findOne({ email: req.body.email });

  if (admin) {
    return res
      .status(401)
      .json({ message: "this admin is already authenticated" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashThePassword = await bcrypt.hash(req.body.password, salt);

  admin = new Admin({
    email: req.body.email,
    password: hashThePassword,
  });

  const saveAdmin = await admin.save();

  const { password, ...other } = saveAdmin._doc;

  res.status(200).json({ ...other });
});

/**
 * -------------------------------------------------
 *@desc   : get all admin users
 *@router : /api/admin/
 *@method : GET
 *@access : private
 *-------------------------------------------------
 **/
const getAdminsController = asyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json(admins[0]);
});

/**
 * -------------------------------------------------
 *@desc   : get the admin dashboard
 *@router : /api/admin/dashboard
 *@method : GET
 *@access : private
 *-------------------------------------------------
 **/
const getAdminsDashboard = asyncHandler(async (req, res) => {
  res.status(200).json("Welcome to Admin Dashboard");
});

module.exports = {
  loginController,
  createAdminController,
  getAdminsController,
  getAdminsDashboard,
};
