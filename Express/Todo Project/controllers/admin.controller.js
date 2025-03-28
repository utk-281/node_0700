const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");

exports.getAllUsers = asyncHandler(async (req, res) => {
  let users = await userModel.find({ _id: { $ne: req.user._id } });
  if (users.length === 0) throw new ErrorHandler(404, "No users found");

  res.status(200).json({ success: true, message: "All users", count: users.length, users });
});

exports.fetchOneUser = asyncHandler(async (req, res) => {
  let user = await userModel.findById(req.params.id);
  if (!user) throw new ErrorHandler(404, "User not found");

  res.status(200).json({ success: true, message: "User found", user });
}); // req.params.id

exports.updateUserRole = asyncHandler(async (req, res) => {
  let user = await userModel.findById(req.params.id);
  if (!user) throw new ErrorHandler(404, "User not found");

  user.role = req.body.role || user.role;
  await user.save();

  res.status(200).json({ success: true, message: "User role updated", user });
}); // req.params.id

exports.fetchAllTodos = asyncHandler(async (req, res) => {
  let todos = await todoModel.find();
  if (todos.length === 0) throw new ErrorHandler(404, "No todos found");

  res.status(200).json({ success: true, message: "All todos", count: todos.length, todos });
});

exports.fetchOneTodo = asyncHandler(async (req, res) => {
  let todo = await todoModel.findById(req.params.id);
  if (!todo) throw new ErrorHandler(404, "Todo not found");

  res.status(200).json({ success: true, message: "Todo found", todo });
}); // req.params.id
