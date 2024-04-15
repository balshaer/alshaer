const express = require("express");
const {
  socialLinksShow,
  socialLinksAdd,
} = require("../../controllers/socialLinks/socialLinksController");

const route = express.Router();

route.get("/show", socialLinksShow);
route.post("/add", socialLinksAdd);
module.exports = route;
