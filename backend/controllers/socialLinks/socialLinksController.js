const asyncHandler = require("express-async-handler");
const SocialLinks = require("../../models/SocialLinks");

const socialLinksShow = asyncHandler(async (req, res) => {
  const socialLinks = await SocialLinks.find();
  if (!socialLinks || socialLinks.length === 0) {
    return res.status(404).json({ message: "There is no social link" });
  }

  return res.status(200).json(socialLinks);
});

const socialLinksAdd = asyncHandler(async (req, res) => {
  const socialLinks = await SocialLinks.find();

  const newSocialLinks = new SocialLinks({
    title: req.body.title,
    link: req.body.link,
  });

  const result = await newSocialLinks.save();

  return res.status(200).json(result);
});

module.exports = { socialLinksShow, socialLinksAdd };
