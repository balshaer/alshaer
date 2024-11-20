const Joi = require("joi");
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 255,
    },

    email: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 255,
    },

    otp: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: Object,
      default: {
        url: "https://img.icons8.com/fluency/48/user-male-circle--v1.png",
        publicId: null,
      },
    },
  },
  { timestamps: true }
);

// Validation
function authValidation(obj) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).trim(),
    email: Joi.string().required().min(5).max(255).trim().email(),
    password: Joi.string().required().min(8).max(255),
    otp: Joi.string().max(4).optional(),
  });

  return schema.validate(obj);
}

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = { Admin, authValidation };
