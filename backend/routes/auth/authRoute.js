const express = require("express");
const adminController = require("../../controllers/auth/authController");
const route = express.Router();

route.post("/admin", adminController);

module.exports = route;
