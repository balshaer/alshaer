const express = require("express");
const app = express();
const connectToDatabase = require("./config/connectToDatabase");

const authRoute = require("./routes/auth/authRoute");
const userRoute = require("./routes/user/userRoute");

const socialLinksShow = require("./routes/socialLink/socialLinksRoute");

const { notFound, errorHandler } = require("./middlewares/error");
require("dotenv").config();
connectToDatabase();

app.use(express.json());
app.use("/api/auth/", authRoute);
app.use("/api/user/", userRoute);
app.use("/api/socialLinks/", socialLinksShow);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Listen on port " + process.env.PORT);
});
