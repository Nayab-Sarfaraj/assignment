const Blog = require("../model/blogModel");
const ErrorHandler = require("../utils/errorhandler");
const updateBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findOne({ _id: id, user: req.user });
    if (!blog) return next(new ErrorHandler("blog not found", 404));

    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({ success: true, updatedBlog });
  } catch (error) {
    return next(new ErrorHandler(error.message, 401));
  }
};
const deleteBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedBlog = await Blog.findOneAndDelete({
      _id: id,
      user: req.user,
    });
    if (!deletedBlog) return next(new ErrorHandler("Blod not found", 404));
    return res.json({ success: true });
  } catch (error) {
    return next(new ErrorHandler(error.message, 401));
  }
};
const getMyBlog = async (req, res, next) => {
  try {
    const myBlogs = await Blog.find({ user: req.user._id });
    return res.json({ success: true, myBlogs });
  } catch (error) {
    return next(new ErrorHandler(error.message, 401));
  }
};
const getSingleBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (!blog) return next(new ErrorHandler("Blog not found", 404));
    return res.json({ success: true, blog });
  } catch (error) {
    return next(new ErrorHandler(error.message, 401));
  }
};
const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    return res.json({ success: true, blogs });
  } catch (error) {
    return next(new ErrorHandler(error.message, 401));
  }
};

const createBlog = async (req, res, next) => {
  try {
    const { imageUrl, description, title } = req.body;
    if (!imageUrl || !description || !title)
      return next(new ErrorHandler("All fields are required", 401));

    const newBlog = new Blog({
      imageUrl,
      description,
      title,
      user: req.user._id,
    });

    const savedBlog = await newBlog.save();
    console.log(savedBlog);
    return res.json({
      success: true,
      savedBlog,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 401));
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  getMyBlog,
  deleteBlog,
  updateBlog,
};
