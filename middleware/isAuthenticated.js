const { verifyJWTtoken } = require("../utils/handleToken");

module.exports = async (req, res, next) => {
  const token = req.header("accessToken");

  if (!token) return res.status(401).send("Access Denied.");

  try {
    // try to decode
    const verified = verifyJWTtoken(token, process.env.ACCESS_TOKEN_SECRET);
    req._id = verified._id;
    req.userRole = verified.role;
    next();
  } catch (err) {
    return res.status(400).send("Invalid Token.");
  }
};
