const router = require("express").Router();
const {
  register,
  verifyEmail,
  login,
  refreshToken,
  authenticated,
  logout,
} = require("../controllers/AuthController");
const isAuthenticated = require("../middleware/isAuthenticated");

router.post("/register", register);

router.get("/verify/:token", verifyEmail);

router.post("/login", login);

router.get("/refreshToken", refreshToken);

router.get("/authenticated", isAuthenticated, authenticated);

router.get("/logout", logout);

module.exports = router;
