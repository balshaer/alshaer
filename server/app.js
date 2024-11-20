const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const adminRoutes = require("./routes/adminRoutes");
const projectsRoute = require("./routes/projectsRoutes");
const worksRoute = require("./routes/workRoutes");
const socialLinks = require("./routes/socialLinksRoutes");
const themeLinks = require("./routes/themesRoute");
const contentRoute = require("./routes/contentRoute");
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

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/admin/", adminRoutes);
app.use("/api/", projectsRoute);
app.use("/api/", worksRoute);
app.use("/api/", socialLinks);
app.use("/api/themes/", themeLinks);
app.use("/api/", contentRoute);

// 404 Not Found Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorHandler);

// Start the server
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
