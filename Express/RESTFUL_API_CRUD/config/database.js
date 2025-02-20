let mongoose = require("mongoose");

let connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/MVC_DB");
  console.log("Database connected");
};

module.exports = {
  connectDB,
};
