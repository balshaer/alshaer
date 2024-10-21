const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  links: {
    type: [
      {
        website: { type: String, default: "" },
      },
    ],
    default: [],
  },
  badge: {
    type: [String],
    default: [],
  },
  date: {
    type: [
      {
        startDate: { type: Date, default: null },
        endDate: { type: Date, default: null },
      },
    ],
    default: [],
  },
  archived: {
    type: Boolean,
    default: false,
  },
  order: { type: Number, required: true, default: 0 },
});

// Validation
function workValidation(obj) {
  const schema = Joi.object({
    title: Joi.string().required().min(2).max(255),
    description: Joi.string().required().min(2).max(255),
    links: Joi.array()
      .items(
        Joi.object({
          website: Joi.string().uri().default("").allow(""),
        })
      )
      .default([]),
    date: Joi.array()
      .items(
        Joi.object({
          startDate: Joi.date().allow(null).default(null),
          endDate: Joi.date().allow(null).default(null),
        }).custom((value, helpers) => {
          if (
            value.startDate &&
            value.endDate &&
            value.startDate > value.endDate
          ) {
            return helpers.error("any.invalid"); // or provide a custom message
          }
          return value;
        })
      )
      .default([]),
    badge: Joi.array().items(Joi.string()).default([]),
    archived: Joi.boolean().default(false),
  });
  return schema.validate(obj);
}

const Work = mongoose.model("WorkModel", WorkSchema);

module.exports = { Work, workValidation };
