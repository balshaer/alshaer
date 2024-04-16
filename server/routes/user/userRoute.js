const express = require("express");
const userController = require("../../controllers/user/userController");
const route = express.Router();

route.post("/add", userController);

module.exports = route;
