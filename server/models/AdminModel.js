const Joi = require("joi");
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 255,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 255,
    },

    otp: {
      type: Number,
      maxLength: 4,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// Validation
function authValidation(obj) {
  const schema = Joi.object({
    email: Joi.string().required().min(5).max(255).trim().email(),
    password: Joi.string().required().min(8).max(255),
    otp: Joi.number().required().max(4).trim(),
  });

  return schema.validate(obj);
}

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = { Admin, authValidation };
