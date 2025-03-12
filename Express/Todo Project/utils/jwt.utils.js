const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.generateToken = asyncHandler(async (id) => {
  return jwt.sign({ id }, "jwt-secret", { expiresIn: "1d" }); // 1 day
});

/*
        sign() is used to generate a token
        jwt.sign(
        {} ==> payload,
        "" ==> secret-key,
        {} ==> options(expiresIn : "1d")
)
*/
