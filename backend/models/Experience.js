const mongoose = require("mongoose");
const joi = require("joi");
const ExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

function experienceValidation(obj) {
  const schema = joi.object({
    company: joi.string().required(),
    role: joi.string().required(),
    date: joi.string().required(),
  });

  schema.validate(obj);
}

module.exports = { Experience, experienceValidation };
