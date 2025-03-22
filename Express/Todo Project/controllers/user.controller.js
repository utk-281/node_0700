const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { generateToken } = require("../utils/jwt.utils");
const { uploadFileOnCloudinary } = require("../utils/cloudinary.utils");

exports.registerUser = asyncHandler(async (req, res) => {
  //! totalNumberOfTasks ==> this should be automatically updated whenever a user creates/deletes a todo
  // console.log(req.file);

  let localFilePath = req?.file?.path;
  // console.log(localFilePath);

  let uploadedResponse = await uploadFileOnCloudinary(localFilePath);
  // console.log(uploadedResponse);

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
    profilePicture: uploadedResponse?.url,
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

  /*
    res.cookie("cookieName", cookieValue, {maxAge: in MS, httpOnly: true})
   */
  res.cookie("myCookie", token, {
    maxAge: 1 * 60 * 60 * 1000, // expiry in ms
    httpOnly: true, // cookie cannot be accessed by browser,
  });
  res.status(200).json({ success: true, message: "User logged in", token });
});

exports.logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("myCookie", "", { maxAge: 0 }); //both key and value will get deleted
  // res.clearCookie("myCookie"); // ==> only the value will get deleted but the key will still be there
  res.status(200).json({ success: true, message: "User logged out" });
});

exports.updateProfilePicture = asyncHandler(async (req, res) => {});

exports.deleteProfilePicture = asyncHandler(async (req, res) => {});

exports.updateUserProfile = asyncHandler(async (req, res) => {});

exports.getCurrentUser = asyncHandler(async (req, res) => {});

exports.deleteUserProfile = asyncHandler(async (req, res) => {
  //! delete the profile picture from cloudinary if it is there
  //! then delete the user
  let deletedUser = await userModel.findByIdAndDelete(req.user._id);
  if (!deletedUser) throw new ErrorHandler(404, "User not found");

  res.status(200).json({ success: true, message: "User deleted", deletedUser });
});
