const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const adminRoutes = require("./routes/adminRoutes");
const projectsRoute = require("./routes/projectsRoutes");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { notFound, errorHandler } = require("./middlewares/error");

const port = process.env.PORT || 5000;
dbConnect();

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/", projectsRoute);
app.use(errorHandler);
app.use(notFound);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
