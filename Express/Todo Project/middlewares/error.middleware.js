const ErrorHandler = require("../utils/errorHandler.utils");

exports.error = (err, req, res, next) => {
  //! validation error
  if (err.name === "ValidationError") {
    let message = Object.values(err.errors).map((obj) => obj.message);
    err = new ErrorHandler(400, message);
  }

  //! global error Handler
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errObj: err,
  });
};
