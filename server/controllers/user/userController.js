const asyncHandler = require("express-async-handler");
const { User, userValidation } = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = asyncHandler(async (req, res) => {
  let user = await User.findOne({ username: req.body.username });

  const { error } = userValidation(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (user) {
    return res.status(403).json({ message: "This user is already admin" });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  user = new User({
    username: req.body.username,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: req.body._id,
    },
    process.env.SECRET_KEY
  );
  const result = await user.save();

  const { password, ...other } = result._doc;


  res.status(200).json({ ...other, token });
});

module.exports = userController;
