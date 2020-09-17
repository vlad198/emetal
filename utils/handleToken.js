const jwt = require("jsonwebtoken");

module.exports.createAccessToken = (_id, secret) => {
  return jwt.sign({ _id }, secret, { expiresIn: "15m" });
};

module.exports.createRefreshToken = (_id, secret) => {
  return jwt.sign({ _id }, secret, { expiresIn: "1y" });
};

module.exports.createVerifyToken = (_id, secret) => {
  return jwt.sign({ _id }, secret, { expiresIn: "1h" });
};

module.exports.createForgotPasswordToken = (data, secret) => {
  return jwt.sign(data, secret, { expiresIn: "1h" });
};

module.exports.verifyJWTtoken = (token, secret) => {
  return jwt.verify(token, secret);
};
