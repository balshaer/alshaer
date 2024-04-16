const express = require("express");
const app = express();
const connectToDatabase = require("./config/connectToDatabase");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/error");

const authRoute = require("./routes/auth/authRoute");
const userRoute = require("./routes/user/userRoute");
const socialLinksShow = require("./routes/socialLink/socialLinksRoute");

const originUrl = "https://alshaer.vercel.app";
const devUrl = "http://localhost:5173";

require("dotenv").config();
connectToDatabase();

// Set up CORS middleware before defining routes
app.use(
  cors({
    origin: ["http://localhost:5173", "https://alshaer.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth/", authRoute);
app.use("/api/user/", userRoute);
app.use("/api/socialLinks/", socialLinksShow);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
