const { get } = require("mongoose");
const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  getMyBlog,
  deleteBlog,
  updateBlog,
  //   getSingleBlog,
  //   getAllBlogs,
} = require("../controllers/blogController");
const isAuthenticated = require("../middleware/auth");

const router = require("express").Router();

router.route("/create").post(isAuthenticated, createBlog);
router.route("/blogs").get(getAllBlogs);
router
  .route("/blog/:id")
  .get(getSingleBlog)
  .delete(isAuthenticated, deleteBlog)
  .put(isAuthenticated, updateBlog);
router.route("/myBlogs").get(isAuthenticated, getMyBlog);
module.exports = router;
