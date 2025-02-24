//! 1) import Router component from express
//! 2) call the top level function
//! 3) export it

let { Router } = require("express");
const {
  createUser,
  fetchAllUsers,
  singleUser,
  updateUser,
} = require("../controllers/users.controller");

let router = Router();

router.get("/all-users", fetchAllUsers);

router.get("/user/:id", singleUser);

router.patch("/update-user/:id", updateUser);

module.exports = router;
