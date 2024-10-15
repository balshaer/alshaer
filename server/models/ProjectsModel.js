const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 255,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 255,
  },
  links: {
    type: [
      {
        website: { type: String, default: "" },
        github: { type: String, default: "" },
      },
    ],
    default: [],
  },
  badge: {
    type: [String],
    default: [],
  },
  options: {
    type: [String],
    enum: ["website", "desktop", "mobile", "tools"],
    default: [],
  },
});

// Validation
function projectValidation(obj) {
  const schema = Joi.object({
    title: Joi.string().required().min(2).max(255),
    description: Joi.string().required().min(2).max(255),
    links: Joi.array()
      .items(
        Joi.object({
          website: Joi.string().uri().default("").allow(""),
          github: Joi.string().uri().default("").allow(""),
        })
      )
      .default([]),
    option: Joi.array()
      .items(Joi.string().valid("website", "desktop", "mobile", "tools")) 
      .default([]),
    badge: Joi.array().items(Joi.string()).default([]),
  });
  return schema.validate(obj);
}

const Project = mongoose.model("ProjectsModel", ProjectsSchema);

module.exports = { Project, projectValidation };
