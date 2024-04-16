const mongoose = require("mongoose");
const joi = require("joi");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

function userValidation(obj) {
  const schema = joi.object({
    username: joi.string().required().min(2).max(255).trim(),
    password: joi.string().required().min(8).max(255).trim(),
  });

  return schema.validate(obj);
}

const User = mongoose.model("User", userSchema);

module.exports = { User, userValidation };
