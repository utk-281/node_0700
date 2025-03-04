//err1=  new Error("message", 102) --> msg of err1:message, status code of err1:102
//err2 =  new Error() --> msg of err2:Internal Server Error, status code of err2:500
//err2 =  new Error( null , 501) --> msg of err2:Internal Server Error, status code of err2:500
// new Error("msg", 500)

exports.error = (err, req, res, next) => {
  //! duplicate key error
  if (err.code === 11000) {
    err.message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err.statusCode = 400;
  }

  //! ValidationError error
  if (err.name === "ValidationError") {
    err.message = Object.values(err.errors).map((abc) => abc.message);
    err.statusCode = 400;
  }

  //! cast error

  //! global error handler
  err.message = err.message || "Internal Server Error!!";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errObj: err,
  });
};
