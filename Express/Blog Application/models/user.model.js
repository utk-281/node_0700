let { Schema, model } = require("mongoose");
let bcrypt = require("bcrypt");

let userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
    },
    totalBlogs: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  let salt = await bcrypt.genSalt(10); // generating a random string of size 10
  let hashedPassword = await bcrypt.hash(this.password, salt); // hash the password with the salt
  this.password = hashedPassword; // store the hashed password in database
});

module.exports = model("User", userSchema);
// lowercase + plural ==> users
