const { Router } = require("express");
const { registerUser, getAllUsers, fetchOneUser } = require("../controllers/user.controller");
const router = Router();

router.post("/register", registerUser);
router.get("/users", getAllUsers);
router.get("/user/:id", fetchOneUser);

module.exports = router;

// http://localhost:9000/v1/users/register
