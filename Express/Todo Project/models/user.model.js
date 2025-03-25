const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    totalNumberOfTasks: {
      type: Number,
      default: 0,
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn4.vectorstock.com/i/1000x1000/96/43/avatar-photo-default-user-icon-picture-face-vector-48139643.jpg",
    },
    role: {
      type: String,
      enum: ["normalUser", "admin"],
      default: "normalUser",
    },
  },
  { timestamps: true }
);

//! pre hook for saving hashed password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

//! userSchema.methods.methodName
userSchema.methods.comparePassword = async function (enteredPassword) {
  // enteredPassword = 123456
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = model("User", userSchema);
