const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");

exports.authenticate = asyncHandler(async (req, res, next) => {
  console.log(req.cookies);
  let cookie = req.cookies.myCookie;

  if (!cookie) throw new ErrorHandler(401, "You are not logged in");

  next();
});

/* {
  myCookie: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZGEzNDJhOWVlYWU3N2I5ZGZhMWQ4MCIsImlhdCI6MTc0MjM1MzQ2NCwiZXhwIjoxNzQyNDM5ODY0fQ.qlpXRwxJ58RjRg-xDotjoGy8Q5fne_X_kT3aXqT6NxI'
} */
