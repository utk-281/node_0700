let { Router } = require("express");
const { displayHomePage, displayFormPage } = require("./controller");

let router = Router();

//! home page
router.get("/", displayHomePage);

//! signup page
router.get("/signup", displayFormPage);

module.exports = router;
