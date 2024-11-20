const mongoose = require("mongoose");
const Joi = require("joi");

const ThemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  colors: {
    type: Object,
    required: true,
  },
});

const Theme = mongoose.model("Theme", ThemeSchema);

const themeValidation = (theme) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    colors: Joi.object().required(),
  });

  return schema.validate(theme);
};

module.exports = {
  Theme,
  themeValidation,
};
