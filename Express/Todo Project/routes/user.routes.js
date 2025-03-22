const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  deleteUserProfile,
} = require("../controllers/user.controller");
const upload = require("../middlewares/multer.middleware");
const { authenticate } = require("../middlewares/authenticate.middleware");

const router = Router();

router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.delete("/delete", authenticate, deleteUserProfile);
module.exports = router;
