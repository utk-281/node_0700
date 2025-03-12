class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;

    Error.captureStackTrace(this, this.constructor); // todo--> to be discussed
  }
}

module.exports = ErrorHandler;

//! here we are creating an error, we are not handling it
