//! steps ==>
//? 1) import the model

let USER_SCHEMA = require("../models/users.model");

let createUser = async (req, res) => {
  console.log(req.body);
  //   let data = req.body;
  let { name, age, email, password, phoneNumber } = req.body;
  let newUser = await USER_SCHEMA.create({ name, age, email, password, phoneNumber });
  res.json({ success: true, message: "user created", newUser });
};

let fetchAllUsers = (req, res) => {};

let singleUsers = (req, res) => {};

let updateUser = (req, res) => {};

let deleteUser = (req, res) => {};

module.exports = {
  createUser,
};

// { key : value  }
// let myName = "utk"
// { myName }
