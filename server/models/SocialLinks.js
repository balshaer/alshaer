const mongoose = require("mongoose");

const socialSchema = mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const SocialLinks = mongoose.model("SocialLinks", socialSchema);

module.exports = {
  SocialLinks,
};
