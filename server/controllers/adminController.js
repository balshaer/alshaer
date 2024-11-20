const asyncHandler = require("express-async-handler");
const { Admin, authValidation } = require("../models/AdminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
} = require("../utils/cloudinary");

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

  const admin = await Admin.findOne({ email: req.body.email });
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

  const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, {
    expiresIn: "360d",
  });
  res.status(200).json({ token });
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
  const hashTheOtp = await bcrypt.hash(req.body.otp, salt);

  let profilePhotoUrl = "";
  if (req.file) {
    try {
      const uploadResult = await cloudinaryUploadImage(req.file.path);
      profilePhotoUrl = uploadResult.secure_url; // Store the secure URL
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Image upload failed", error: error.message });
    }
  }

  admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: hashThePassword,
    otp: hashTheOtp,
    profilePhoto: profilePhotoUrl,
  });

  const saveAdmin = await admin.save();
  const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, {
    expiresIn: "360d",
  });

  const { password, ...other } = saveAdmin._doc;

  res.status(200).json({ ...other, token });
});

/**
 * -------------------------------------------------
 *@desc   : get admin otp
 *@router : /api/admin/otp/:id
 *@method : GET
 *@access : private
 *-------------------------------------------------
 **/

const getAdminOTP = asyncHandler(async (req, res) => {
  let admin = await Admin.findById(req.params.id);

  if (!admin) {
    return res.status(404).json({ message: "this admin not exsist" });
  }

  const otp = admin.otp;

  res.status(200).json({ otp });
});

/**
 * -------------------------------------------------
 *@desc   : upload profile photo
 *@router : /api/users/profile-photo
 *@method : POST
 *@access : private (only himself)
 *-------------------------------------------------
 **/

const uploadProfilePhoto = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(404).json({ message: "no file provided" });
  }

  const imagePath = path.join(__dirname, `../images${req.file.filename}`);

  const result = await cloudinaryUploadImage(imagePath);

  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({ message: "user is not found" });
  }

  user.profilePhoto = {
    url: result.secure_url,
    publicId: result.public_Id,
  };

  // Check if user has a profile photo
  if (user.profilePhoto && user.profilePhoto.publicId !== null) {
    await cloudinaryRemoveImage(user.profilePhoto.publicId);
  }

  await user.save();

  res.status(200).json({
    message: "your profile photo uploaded successfully",
    profilePhoto: {
      url: result.secure_url,
      publicId: result.public_Id,
    },
  });

  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error deleting image:", err);
    } else {
      console.log("Image deleted successfully");
    }
  });
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
 *@desc   : get admin
 *@router : /api/admin/:id
 *@method : GET
 *@access : private
 *-------------------------------------------------
 **/
const getCurrentAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) {
    return res.status(404).json({ message: "This admin does not exist" });
  }
  res.status(200).json(admin);
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
  getCurrentAdmin,
  uploadProfilePhoto,
  getAdminOTP,
};
