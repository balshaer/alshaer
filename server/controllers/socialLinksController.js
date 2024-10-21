const asyncHandler = require("express-async-handler");
const { SocialLinks } = require("../models/SocialLinks");

/**
 * -------------------------------------------------
 *@desc   : add social link
 *@router : /api/social/add
 *@method : POST
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const addSocialLink = asyncHandler(async (req, res) => {
  const { name, link } = req.body;
  const socialLink = new SocialLinks({ name, link });

  await socialLink.save();
  res.status(201).json(socialLink);
});

/**
 * -------------------------------------------------
 *@desc   : get all social links
 *@router : /api/social
 *@method : GET
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const getSocialLinks = asyncHandler(async (req, res) => {
  const socialLinks = await SocialLinks.find();
  res.status(200).json(socialLinks);
});

/**
 * -------------------------------------------------
 *@desc   : update social link
 *@router : /api/social/update/:id
 *@method : PUT
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const updateSocialLink = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, link } = req.body;

  const socialLink = await SocialLinks.findByIdAndUpdate(
    id,
    { name, link },
    { new: true }
  );

  if (!socialLink) {
    return res.status(404).json({ message: "Social link not found" });
  }

  res.status(200).json(socialLink);
});

/**
 * -------------------------------------------------
 *@desc   : delete social link
 *@router : /api/social/delete/:id
 *@method : DELETE
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const deleteSocialLink = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const socialLink = await SocialLinks.findByIdAndDelete(id);

  if (!socialLink) {
    return res.status(404).json({ message: "Social link not found" });
  }

  res.status(200).json({ message: "Social link deleted" });
});

/**
 * -------------------------------------------------
 *@desc   : delete all social links
 *@router : /api/social/delete-all
 *@method : DELETE
 *@access : PRIVATE
 *-------------------------------------------------
 **/
const deleteAllSocialLinks = asyncHandler(async (req, res) => {
  await SocialLinks.deleteMany({});
  res.status(200).json({ message: "All social links deleted" });
});

module.exports = {
  addSocialLink,
  getSocialLinks,
  updateSocialLink,
  deleteSocialLink,
  deleteAllSocialLinks,
};
