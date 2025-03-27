const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");

exports.getAllUsers = asyncHandler(async (req, res) => {
  let users = await userModel.find({ _id: { $ne: req.user._id } });
  if (users.length === 0) throw new ErrorHandler(404, "No users found");

  res.status(200).json({ success: true, message: "All users", count: users.length, users });
});

exports.fetchOneUser = asyncHandler(async (req, res) => {}); // req.params.id

exports.updateUserRole = asyncHandler(async (req, res) => {}); // req.params.id

exports.fetchAllTodos = asyncHandler(async (req, res) => {});

exports.fetchOneTodo = asyncHandler(async (req, res) => {}); // req.params.id
