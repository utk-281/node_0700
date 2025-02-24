//! steps ==>
//? 1) import the model

let USER_SCHEMA = require("../models/users.model");

let createUser = async (req, res) => {
  console.log(req.body);
  //   let data = req.body;
  let { name, age, email, password, phoneNumber } = req.body;
  let newUser = await USER_SCHEMA.create({ name, age, email, password, phoneNumber });

  res.json({ success: true, message: "user data saved", newUser });
};

let fetchAllUsers = async (req, res) => {
  let payload = await USER_SCHEMA.find();
  res.json({ success: true, message: "data fetched", count: payload.length, payload });
};

let singleUser = async (req, res) => {
  console.log(req.params);
  // { id: '67bbd48c762b128cc3e2cc3d' }
  let { id } = req.params;
  // let user = await USER_SCHEMA.findOne({ _id: id });

  let user = await USER_SCHEMA.findOne({ _id: req.params.id });

  res.json({ success: true, message: "data fetched", user });
};

let updateUser = async (req, res) => {
  let { id } = req.params;

  let updatedUser = await USER_SCHEMA.updateOne(
    { _id: id },
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
      },
    }
  );

  res.json({ success: true, message: "data updated", updatedUser });
};

let deleteUser = (req, res) => {};

module.exports = {
  createUser,
  fetchAllUsers,
  singleUser,
  updateUser,
};
