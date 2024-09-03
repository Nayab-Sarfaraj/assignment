const {
  register,
  login,
  getUserProfile,
  logout,
} = require("../controllers/userControllers");
const isAuthenticated = require("../middleware/auth");
const router = require("express").Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(isAuthenticated, getUserProfile);
router.route("/logout").get(logout);
module.exports = router;
