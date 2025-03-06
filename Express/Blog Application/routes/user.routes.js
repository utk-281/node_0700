const { Router } = require("express");
const {
  registerUser,
  getAllUsers,
  fetchOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const router = Router();

router.post("/register", registerUser);
router.get("/users", getAllUsers);
router.get("/user/:id", fetchOneUser);

router.delete("/user-delete/:id", deleteUser);
router.put("/user-update-put/:id", updateUser);
router.patch("/user-update-patch/:id", updateUser);

module.exports = router;

// http://localhost:9000/v1/users/register
