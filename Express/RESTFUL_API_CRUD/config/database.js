let mongoose = require("mongoose");

let connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Database connected");
};

module.exports = {
  connectDB,
};
