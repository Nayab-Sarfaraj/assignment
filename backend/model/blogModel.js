const mongoose = require("mongoose");
const User = require("../model/userModel");
const category = {
  TECHNOLOGY: "Technology",
  LIFESTYLE: "lifestyle",
  TRAVEL: "travel",
  BUISNESS: "buisness",
  ECONOMY: "economy",
  SPORTS: "sports",
};
const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"] },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
    likes: { type: Number, default: 0 },

    comments: [
      {
        userId: { type: mongoose.Schema.ObjectId, ref: "user" },
        comment: { type: String },
        _id: false,
      },
      { timestamps: true },
    ],
    coverImage: { type: String, required: true },
    category: {
      type: String,
      required: [true, "Category must be provided"],
      enum: Object.values(category),
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
