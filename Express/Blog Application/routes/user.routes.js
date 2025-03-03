const { Router } = require("express");
const { registerUser } = require("../controllers/user.controller");
const router = Router();

router.post("/register", registerUser);

module.exports = router;

// http://localhost:9000/v1/users/register
