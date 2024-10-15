const mongoose = require("mongoose");
const socialSchema = mongoose.Schema({
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  phone: { type: Number, required: true },
  youtube: { type: String, required: true },
});

function socialLinksValidation(obj) {
  const schema = Joi.object({
    linkedin: Joi.string().required().min(2).link(),
    github: Joi.string().required().min(2).link(),
    phone: Joi.number().required().min(2).link(),
    youtube: Joi.string().required().min(2).link(),
  });
  return schema.validate(obj);
}

const SocialLinks = mongoose.model("SocialLinks", socialSchema);

module.exports = module.exports = {
  SocialLinks,
  socialLinksValidation,
};
