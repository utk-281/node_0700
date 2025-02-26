//! steps ==>
//? 1) import the model

let USER_SCHEMA = require("../models/users.model");

let createUser = async (req, res) => {
  try {
    console.log(req.body);
    //   let data = req.body;
    let { name, age, email, password, phoneNumber } = req.body;

    let existingUser = await USER_SCHEMA.findOne({ email });
    // if (existingUser)
    //   return res.status(409).json({ success: false, message: "user already exists" });

    let newUser = await USER_SCHEMA.create({ name, age, email, password, phoneNumber });

    res.status(201).json({ success: true, message: "user data saved", newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "error occurred while creating a new user",
      error: err.message,
    });
  }
};

let fetchAllUsers = async (req, res) => {
  try {
    let payload = await USER_SCHEMA.find();

    if (payload.length === 0)
      return res.status(404).json({ success: false, message: "no users found" });

    res
      .status(200)
      .json({ success: true, message: "data fetched", count: payload.length, payload });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error occurred while fetching all users",
      error: err.message,
    });
  }
};

let singleUser = async (req, res) => {
  try {
    console.log(req.params);
    // { id: '67bbd48c762b128cc3e2cc3d' }
    let { id } = req.params;
    // let user = await USER_SCHEMA.findOne({ _id: id });

    let user = await USER_SCHEMA.findOne({ _id: req.params.id });

    if (!user) return res.status(404).json({ success: false, message: "user not found" });

    res.json({ success: true, message: "data fetched", user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error occurred while fetching single user",
      error: error.message,
    });
  }
};

let updateUser = async (req, res) => {
  try {
    let { id } = req.params;

    let findUser = await USER_SCHEMA.findOne({ _id: id });
    if (!findUser) return res.status(404).json({ success: false, message: "user not found" });

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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error occurred while updating user",
      error: error.message,
    });
  }
};

let deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    let findUser = await USER_SCHEMA.findOne({ _id: id });
    if (!findUser) return res.status(404).json({ success: false, message: "user not found" });

    let deleteUser = await USER_SCHEMA.deleteOne({ _id: id });

    res.json({ success: true, message: "data deleted", deleteUser });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error occurred while deleting user",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  fetchAllUsers,
  singleUser,
  updateUser,
  deleteUser,
};
