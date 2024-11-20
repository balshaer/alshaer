const Joi = require("joi");
const mongoose = require("mongoose");

const socialSchema = mongoose.Schema({
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  phone: { type: String, required: true },
  youtube: { type: String, required: true },
});

function socialLinksValidation(obj) {
  const schema = Joi.object({
    linkedin: Joi.string().uri().required().min(2),
    github: Joi.string().uri().required().min(2),
    phone: Joi.string()
      .required()
      .min(2)
      .pattern(/^[0-9]+$/),
    youtube: Joi.string().uri().required().min(2),
  });

  return schema.validate(obj);
}

const SocialLinks = mongoose.model("SocialLinks", socialSchema);

module.exports = {
  SocialLinks,
  socialLinksValidation,
};
