const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const connectToDatabase = require("./config/connectToDatabase");
connectToDatabase();
app.listen(process.env.PORT, () => {
  console.log("Listen on port " + process.env.PORT);
});
