const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { generateToken } = require("../utils/jwt.utils");
const { uploadFileOnCloudinary, deleteFileFromCloudinary } = require("../utils/cloudinary.utils");
const { extractPublicId } = require("../utils/extractPublicId.utils");

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

exports.updateProfilePicture = asyncHandler(async (req, res) => {
  //! find the user
  //! see if the user has uploaded any profile picture previously
  //! if uploaded, delete the picture
  //! upload the new profile pic to the cloudinary
  //! store the url in database

  let user = await userModel.findById(req.user._id);

  let defaultProfilePic =
    "https://cdn4.vectorstock.com/i/1000x1000/96/43/avatar-photo-default-user-icon-picture-face-vector-48139643.jpg";

  // user.profilePic = https://cdn4.vectorstock.com/i/1000x1000/96/43/avatar-photo-default-user-icon-picture-face-vector-48139643.jpg
  if (user.profilePicture !== defaultProfilePic) {
    let public_id = extractPublicId(user.profilePicture);
    await deleteFileFromCloudinary(public_id);
  }

  let localFilePath = req?.file?.path;
  let uploadedResponse = await uploadFileOnCloudinary(localFilePath);

  user.profilePicture = uploadedResponse.secure_url; // assigning a value
  // user.profilePic = http://res.cloudinary.com/dmqwvd39n/image/upload/v1742781114/todoProject/wuudfff6o06zzzule96d.jpg
  // new value
  await user.save();

  res.status(200).json({ success: true, message: "Profile picture updated", user });
});

exports.deleteProfilePicture = asyncHandler(async (req, res) => {});

exports.updateUserProfile = asyncHandler(async (req, res) => {});

exports.getCurrentUser = asyncHandler(async (req, res) => {});

exports.deleteUserProfile = asyncHandler(async (req, res) => {
  //! delete the profile picture from cloudinary if it is there
  //! then delete the user
  let user = await userModel.findById(req.user._id);

  let defaultProfilePic =
    "https://cdn4.vectorstock.com/i/1000x1000/96/43/avatar-photo-default-user-icon-picture-face-vector-48139643.jpg";

  if (user.profilePicture !== defaultProfilePic) {
    //delete the profile picture from cloudinary
    let public_id = extractPublicId(user?.profilePicture);
    await deleteFileFromCloudinary(public_id);
  }

  await userModel.findByIdAndDelete(req.user._id);

  res.status(200).json({ success: true, message: "User deleted" });
});

// todoProject/wuudfff6o06zzzule96d

// https://res.cloudinary.com/dmqwvd39n/image/upload/v1742265707/todoProject/hvnwcervps8imtfvzy2j.jpg
