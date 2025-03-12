const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { generateToken } = require("../utils/jwt.utils");

exports.registerUser = asyncHandler(async (req, res) => {
  //! totalNumberOfTasks ==> this should be automatically updated whenever a user creates/deletes a todo
  //? profilePicture ==> this field is not a part of req.body

  let { name, email, password, role } = req.body;

  let existingUser = await userModel.findOne({ email });
  if (existingUser) throw new ErrorHandler(409, "Email already exists");

  //! previous response ==> res.status(409).json({ success: false, message: "Email already exists" });
  //! new Error("Email already exists")
  //! new ErrorHandler("Email already exists", 409)

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

exports.loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  let existingUser = await userModel.findOne({ email });
  if (!existingUser) throw new ErrorHandler(400, "Invalid Credentials");

  // password = 123456
  let isMatched = await existingUser.comparePassword(password);
  //  {name, password, .....}.comparePassword(123456)

  if (!isMatched) throw new ErrorHandler(400, "Invalid Credentials");

  let token = await generateToken(existingUser._id);
  // let token = existingUser.generateToken(this._id); //! ==> this will not work
  // console.log(token);

  res.status(200).json({ success: true, message: "User logged in", token });
});
