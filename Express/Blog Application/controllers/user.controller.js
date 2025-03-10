let USER_SCHEMA = require("../models/user.model");
let asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");

exports.registerUser = asyncHandler(async (req, res, next) => {
  let { email, password, phoneNumber, totalBlogs, role } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email: email });
  if (existingUser) throw new ErrorHandler("User already exists", 409);

  let newUser = await USER_SCHEMA.create({
    email,
    password,
    phoneNumber,
    totalBlogs,
    role,
  });
  res.status(201).json({ success: true, message: "User registered successfully", data: newUser });
});

// exports.loginUser = asyncHandler(async (req, res) => {
//   let { email, password } = req.body;
//   let user = await USER_SCHEMA.findOne({ email });
//   if (!user) throw new ErrorHandler("Invalid credentials", 401);
// });

exports.getAllUsers = asyncHandler(async (req, res) => {
  let users = await USER_SCHEMA.find();

  if (users.length === 0) throw new ErrorHandler("No users found", 404);

  res.status(200).json({
    success: true,
    count: users.length,
    message: "Users fetched successfully",
    data: users,
  });
});

exports.fetchOneUser = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let user = await USER_SCHEMA.findById(id);
  if (!user) throw new ErrorHandler("No user found", 404);

  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user,
  });
});

exports.deleteUser = asyncHandler(async (req, res) => {
  let deletedUser = await USER_SCHEMA.findByIdAndDelete(req.params.id);
  if (!deletedUser) throw new ErrorHandler("No user found", 404);

  res.status(200).json({
    success: true,
    message: "user deleted successfully",
    deletedUser,
  });
});

exports.updateUser = asyncHandler(async (req, res) => {
  console.log(req.body.password);
  let updatedUser = await USER_SCHEMA.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedUser) throw new ErrorHandler("No user found", 404);

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    updatedUser,
  });
});

// using asyncHandler ==> if error occurs it just displays it

//! we need to handle the error --> if any error occurs the flow will go to error middleware

// E11000 duplicate key error collection, 500 Internal Server Error
// User validation failed: email: Path `email` is required,500 Internal Server Error

// we catch the errors using asyncHandler
// we handled the errors using error middleware
// to generate custom errors we will use a custom error class

/*
! missing features
- log in
- log out
- forgot password
- reset password
- update password
- ref of user (which blog is created by which user)
- roles and permissions
*/
//! all of these features will be covered in TODO project
