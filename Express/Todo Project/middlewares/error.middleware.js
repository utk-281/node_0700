const ErrorHandler = require("../utils/errorHandler.utils");

exports.error = (err, req, res, next) => {
  //! validation error
  if (err.name === "ValidationError") {
    let message = Object.keys(err.errors).map((key) => err.errors[key].message);
    err = new ErrorHandler(400, message);
  }

  //! JsonWebTokenError
  if (err.name === "JsonWebTokenError") {
    let message = "Invalid Token, Please login again";
    err = new ErrorHandler(400, message);
  }

  //! CastError
  if (err.name === "CastError") {
    let message = `Expected datatype is: ${err.kind} for field: ${err.path}`;
    // err = new ErrorHandler(400, message);
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

// Object.keys ==> this will convert all the keys present in the object into and array

// emp = {
//   name:"abc"
//   age:32,
//   id:12,
// };
// Object.keys(emp); = ["name", "age", "id"];
// Object.values(emp); = ["abc", 32, 12];

// dd/mm/yyyy
