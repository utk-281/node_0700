const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const userModel = require("../models/user.model");

exports.authenticate = asyncHandler(async (req, res, next) => {
  // console.log(req.cookies);
  let cookie = req?.cookies?.myCookie;

  if (!cookie) throw new ErrorHandler(401, "You are not logged in");

  let decodedCookie = jwt.verify(cookie, JWT_SECRET);
  // console.log(decodedCookie);

  let myUser = await userModel.findById(decodedCookie.id);
  console.log(myUser);
  if (!myUser) throw new ErrorHandler(401, "You are not logged in, Please login again");

  req.user = myUser;

  next();
});

// protected routes
