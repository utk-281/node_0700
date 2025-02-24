let express = require("express");

let app = express();

app.use((req, res, next) => {
  req.myName = "utk";
  console.log("middleware1");
  next();
});
// use(cb function) ==> user defined middleware

app.use((req, res, next) => {
  console.log("inside middleware2 " + req.myName);
  console.log("middleware2");
  next();
});

//! 10 more middlewares

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  console.log("inside about " + req.myName);
  res.send("about page");
});

app.get("/blogs", (req, res) => {
  res.send("blogs page");
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});

//! 5 types of middlewares
//? 1) router level middleware
//? 2) built-in middleware
//? 3) user-defined middleware
//? 4) app level middleware
//? 5) error level middleware
