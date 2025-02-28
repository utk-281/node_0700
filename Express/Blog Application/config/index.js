// process.env.VARIABLE_NAME
require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
};
