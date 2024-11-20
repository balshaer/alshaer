const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connect to database successfully ✅");
  } catch (error) {
    console.log("Error connecting to database with error: " + error);
  }
};

module.exports = { dbConnect };
