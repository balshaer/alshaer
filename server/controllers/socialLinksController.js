const { socialLinksValidation, SocialLinks } = require("../models/SocialLinks");
const asyncHandler = require("express-async-handler");

/**
 * -------------------------------------------------
 *@desc   : add social links
 *@router : /api/social/add
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const addSocialLinks = asyncHandler(async (req, res) => {
  const findLinks = await SocialLinks.find();

  const { error } = socialLinksValidation(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (findLinks.length > 0) {
    return res.status(409).json({ message: "Social links already exist" });
  }

  try {
    const socialLinks = new SocialLinks({
      linkedin: req.body.linkedin,
      github: req.body.github,
      phone: req.body.phone,
      youtube: req.body.youtube,
    });

    await socialLinks.save();
    res.status(201).json(socialLinks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * -------------------------------------------------
 *@desc   : get social links
 *@router : /api/social/
 *@method : GET
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const getSocialLinks = asyncHandler(async (req, res) => {
  const socialLinks = await SocialLinks.find();

  if (!socialLinks || socialLinks.length === 0) {
    return res.status(404).json({ message: "No social links found" });
  }
  res.status(200).json({ socialLinks });
});

/**
 * -------------------------------------------------
 *@desc   : update social links
 *@router : /api/social/update
 *@method : PUT
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const updateSocialLinks = asyncHandler(async (req, res) => {
  const { linkedin, github, phone, youtube } = req.body;

  const { error } = socialLinksValidation(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const updatedLinks = await SocialLinks.findOneAndUpdate(
      {},
      { linkedin, github, phone, youtube },
      { new: true }
    );

    if (!updatedLinks) {
      return res.status(404).json({ message: "Social links not found" });
    }

    res.status(200).json(updatedLinks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { getSocialLinks, addSocialLinks, updateSocialLinks };
