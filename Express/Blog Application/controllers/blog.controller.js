const BLOG_SCHEMA = require("../models/blog.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");

exports.createBlog = asyncHandler(async (req, res) => {
  let { title, description, createdBy } = req.body;

  let newBlog = await BLOG_SCHEMA.create({ title, description, createdBy });

  res.status(201).json({ success: true, message: "blog created successfully", newBlog });
});

exports.fetchAllBlogs = asyncHandler(async (req, res) => {
  let blogs = await BLOG_SCHEMA.find();

  if (blogs.length === 0) throw new ErrorHandler("No blogs found", 404);

  res.status(200).json({
    success: true,
    message: "blogs fetched successfully",
    count: blogs.length,
    blogs,
  });
});

exports.fetchOneBlog = asyncHandler(async (req, res) => {
  let blog = await BLOG_SCHEMA.findById(req.params.id).populate("createdBy");

  if (!blog) throw new ErrorHandler("No blog found", 404);

  res.status(200).json({
    success: true,
    message: "blog fetched successfully",
    blog,
  });
});

exports.updateBlog = asyncHandler(async (req, res) => {
  let updatedBlog = await BLOG_SCHEMA.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!updatedBlog) throw new ErrorHandler("No blog found", 404);

  res.status(200).json({
    success: true,
    message: "blog updated successfully",
    updatedBlog,
  });
});

exports.deleteBlog = asyncHandler(async (req, res) => {
  let deletedBlog = await BLOG_SCHEMA.findByIdAndDelete(req.params.id);

  if (!deletedBlog) throw new ErrorHandler("No blog found", 404);

  res.status(200).json({
    success: true,
    message: "blog deleted successfully",
    deletedBlog,
  });
});
