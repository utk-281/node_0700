const mongoose = require("mongoose");
const { MONGODB_URL } = require(".");

exports.connectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log(`MongoDB connected: ${MONGODB_URL}`);
};
// mongodb://localhost:27017/todoProject
