let fs = require("fs");

let displayHomePage = (req, res) => {
  //   res.send("this is home page");
  fs.createReadStream("./pages/home.html").pipe(res);
};

let displayFormPage = (req, res) => {
  //   res.send("this is signup page!!!!"); // name, email, password
  fs.createReadStream("./pages/signup.html").pipe(res);
};

module.exports = {
  displayHomePage,
  displayFormPage,
};
