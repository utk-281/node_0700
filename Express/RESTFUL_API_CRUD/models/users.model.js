//! steps ==>
//? 1) import the module
//? 2) create a schema
//? 3) create a model/collection and export it

let mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      required: [true, "phone number is required"],
    },
  },
  { timestamps: true } // todo
);
module.exports = mongoose.model("User", userSchema); // collection-name : users
// collection would be created in database with all lower case and plural of model name
