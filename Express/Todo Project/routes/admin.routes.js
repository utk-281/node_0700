const { Router } = require("express");
const { authenticate } = require("../middlewares/authenticate.middleware");
const { getAllUsers } = require("../controllers/admin.controller");
const { authorize } = require("../middlewares/authorize.middleware");
const router = Router();

router.get("/all", authenticate, authorize, getAllUsers);

module.exports = router;
