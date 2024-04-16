const mongoose = require("mongoose");

function connectToDatabase() {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Failed to connect to database with error: " + error);
  }
}

module.exports = connectToDatabase;
