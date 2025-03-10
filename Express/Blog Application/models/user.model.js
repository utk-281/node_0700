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
  /* if() */ // todo
  let salt = await bcrypt.genSalt(10); // generating a random string and processing it 2^10 times
  let hashedPassword = await bcrypt.hash(this.password, salt); // hash the password with the salt
  this.password = hashedPassword; // store the hashed password in database
}); // hashing is a one way process

// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

module.exports = model("User", userSchema);
// lowercase + plural ==> users
