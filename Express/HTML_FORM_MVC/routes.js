let { Router } = require("express");
const {
  displayHomePage,
  displayFormPage,
  displayAboutPage,
  handleFormSubmit,
} = require("./controller");

let router = Router();

//! home page
router.get("/", displayHomePage);

//! signup page
router.get("/signup", displayFormPage);

//! about page
router.get("/about", displayAboutPage);

//! post method ==> form data
router.post("/xyz", handleFormSubmit);

module.exports = router;
