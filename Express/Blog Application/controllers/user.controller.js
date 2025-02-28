let USER_SCHEMA = require("../models/user.model");

exports.registerUser = async (req, res) => {
  try {
    let { email, password, phoneNumber, totalBlogs, role } = req.body;

    let existingUser = await USER_SCHEMA.findOne({ email });
    if (existingUser)
      return res.status(409).json({ success: false, message: "User already exists" });

    let newUser = await USER_SCHEMA.create({
      email,
      password,
      phoneNumber,
      totalBlogs,
      role,
    });
    res.status(201).json({ success: true, message: "User registered successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
