const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
  if (!tokenCheck || !tokenCheck.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const token = tokenCheck.split(" ")[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }
}

module.exports = { verifyToken };
