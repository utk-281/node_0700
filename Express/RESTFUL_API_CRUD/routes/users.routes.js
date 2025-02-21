//! 1) import Router component from express
//! 2) call the top level function
//! 3) export it

let { Router } = require("express");
const { createUser } = require("../controllers/users.controller");

let router = Router();

router.post("/create-user", createUser);

module.exports = router;
