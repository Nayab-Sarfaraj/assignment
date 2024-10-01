const { get } = require("mongoose");
const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  getMyBlog,
  deleteBlog,
  updateBlog,
  increaseLike,
  decreaseLike,
  addComment,
  fetchAuthorBlogsAndCredential,
  searchBlogs,
  getSliderContent,
} = require("../controllers/blogController");
const isAuthenticated = require("../middleware/auth");
const upload = require("../middleware/multer");

const router = require("express").Router();

router
  .route("/create")
  .post(isAuthenticated, upload.single("coverImage"), createBlog);

router.route("/blogs").get(getAllBlogs);
router
  .route("/blog/:id")
  .get(getSingleBlog)
  .delete(isAuthenticated, deleteBlog)
  .put(isAuthenticated, upload.single("coverImage"), updateBlog);
router.route("/myBlogs").get(isAuthenticated, getMyBlog);
router.route("/like/:id").post(isAuthenticated, increaseLike);
router.route("/unlike/:id").post(isAuthenticated, decreaseLike);
router.route("/addcomment/:id").post(isAuthenticated, addComment);
router.route("/author/:id").get(isAuthenticated, fetchAuthorBlogsAndCredential);
router.route("/search").post(isAuthenticated, searchBlogs);
router.route("/carousel").get(getSliderContent);
module.exports = router;
