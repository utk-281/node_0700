let USER_SCHEMA = require("../models/user.model");
let asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");

exports.registerUser = asyncHandler(async (req, res, next) => {
  let { email, password, phoneNumber, totalBlogs, role } = req.body;

  let newUser = await USER_SCHEMA.create({
    email,
    password,
    phoneNumber,
    totalBlogs,
    role,
  });
  res.status(201).json({ success: true, message: "User registered successfully", data: newUser });
});

// error --> catch() --> displaying error  (catching errors gracefully)
