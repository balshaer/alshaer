// middlewares/error.js
const notFound = (req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
};

const errorHandler = (err, req, res, next) => {
  console.error(err); // Log error details for debugging
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = { notFound, errorHandler };
