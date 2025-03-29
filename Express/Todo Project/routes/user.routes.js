const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  deleteUserProfile,
  updateProfilePicture,
  deleteProfilePicture,
  updateUserProfile,
  getCurrentUser,
} = require("../controllers/user.controller");
const upload = require("../middlewares/multer.middleware");
const { authenticate } = require("../middlewares/authenticate.middleware");

const router = Router();

router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.delete("/delete", authenticate, deleteUserProfile);

router.patch(
  "/update-picture",
  authenticate,
  upload.single("profilePicture"),
  updateProfilePicture
);

router.patch("/delete-picture", authenticate, deleteProfilePicture);

router.patch("/update-profile", authenticate, upload.none(), updateUserProfile);

router.get("/current-user", authenticate, getCurrentUser);

module.exports = router;
