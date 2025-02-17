let express = require("express");

let app = express();

app.use((req, res, next) => {
  console.log("middleware1");
  next();
});
// use(cb function)

app.use((req, res, next) => {
  console.log("middleware2");
  next();
});

//! 10 more middlewares

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/blogs", (req, res) => {
  res.send("blogs page");
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});
