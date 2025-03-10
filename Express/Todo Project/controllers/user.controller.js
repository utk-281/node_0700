const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");

exports.registerUser = asyncHandler(async (req, res) => {
  //! totalNumberOfTasks ==> this should be automatically updated whenever a user creates/deletes a todo
  //? profilePicture ==> this field is not a part of req.body

  let { name, email, password, role } = req.body;

  let existingUser = await userModel.findOne({ email });
  if (existingUser) throw new ErrorHandler(409, "Email already exists");

  let newUser = await userModel.create({
    name,
    email,
    password,
    role,
  });
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: newUser,
  });
});

exports.loginUser = asyncHandler(async (req, res) => {});
