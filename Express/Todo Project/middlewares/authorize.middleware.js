const ErrorHandler = require("../utils/errorHandler.utils");

exports.authorize = (req, res, next) => {
  if (req.user.role === "admin") next();
  else throw new ErrorHandler(401, "You don't have access to this route");
};
// access control middleware
