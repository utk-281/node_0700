let express = require("express");
let mongodb = require("mongodb");
let fs = require("fs");

let app = express();

app.use(express.urlencoded({ extended: true })); // todo

//! home page
app.get("/", (req, res) => {
  //   res.send("this is home page");
  fs.createReadStream("./pages/home.html").pipe(res);
});

//! signup page
app.get("/signup", (req, res) => {
  //   res.send("this is signup page!!!!"); // name, email, password
  fs.createReadStream("./pages/signup.html").pipe(res);
});

//! about page
app.get("/about", (req, res) => {
  res.send("<h1>this is about page</h1>");
});

//! post method ==> form data
app.post("/abc", (req, res) => {
  //! whatever endpoint is used in this method, pass the same in form action
  //! set the method to post in the form
  //! provide value to the name attribute
  //   console.log(req.body); //   { name: 'utkarsh', email: 'utkarsh', password: '1234' }
  //{ userName: 'qwerty', userEmail: 'qwerty', userPassword: '1234' }
  //   res.send(req.body);

  let { userName, userEmail, userPassword } = req.body;
  res.send(`user with email:<h1> ${userEmail}</h1> and password: ${userPassword} is created`);

  //! since i have the data ==> i can store this data in some file
  //! since i have the data ==> i can store this in the database
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});

// node filename
// nodemon filename
//! endpoint --> /abc
