const ErrorHandler = require("../utils/errorHandler.utils");

exports.authorize = (req, res, next) => {
  if (req.user.role === "admin") next();
  else throw new ErrorHandler(401, "You are not authorized");
};
// access control middleware
