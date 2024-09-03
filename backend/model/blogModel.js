const mongoose = require("mongoose");
const User = require("../model/userModel");
const blogSchema = mongoose.Schema({
  title: { type: String, required: [true, "Tit;e is required"] },
  imageUrl: { type: String },
  description: { type: String, required: [true, "Description is required"] },
  user: {
    // this type signifies the object id of the user
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
