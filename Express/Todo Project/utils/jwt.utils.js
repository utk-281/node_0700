const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { JWT_SECRET } = require("../config");

exports.generateToken = asyncHandler(async (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "1d" }); // 1 day
});

/*
        sign() is used to generate a token
        jwt.sign(
        {} ==> payload,
        "" ==> secret-key,
        {} ==> options(expiresIn : "1d")
)
*/
