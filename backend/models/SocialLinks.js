const mongoose = require("mongoose");
const socialLinksSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },
});
const SocialLinks = mongoose.model("SocialLinks", socialLinksSchema);

module.exports = SocialLinks;
