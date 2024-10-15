const { socialLinksValidation, SocialLinks } = require("../models/SocialLinks");

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

  if (!socialLinks) {
    return res.status(404).json({ message: "No social links found" });
  }

  res.status(200).json({ socialLinks });
});

/**
 * -------------------------------------------------
 *@desc   : add social links
 *@router : /api/social/add
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const addSocialLinks = asyncHandler(async (req, res) => {
  const socialLinks = await SocialLinks.find();

  if (!socialLinks) {
    return res.status(404).json({ message: "No social links found" });
  }








  res.status(200).json({ socialLinks });
});

module.exports = { getSocialLinks, addSocialLinks };
