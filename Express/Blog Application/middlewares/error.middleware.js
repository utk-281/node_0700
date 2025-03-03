// new ErrorHandler("user already exists", 409)
// new Error()

const ErrorHandler = require("../utils/errorHandler");

exports.error = (err, req, res, next) => {
  //! code --> 11000
  if (err.code === 11000) {
    res.status(409).json({
      success: false,
      message: "User with this email already registered",
      errors: new ErrorHandler("user already exists", 409),
    });
  }

  //! handling global error
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errObject: err,
  });
};
