module.exports = (req, res, next) => {
  if (req.userRole !== "admin") return res.status(401).send("Access denied");
  next();
};
