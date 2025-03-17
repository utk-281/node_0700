const { Router } = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/user.controller");
const upload = require("../middlewares/multer.middleware");

const router = Router();

router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;
