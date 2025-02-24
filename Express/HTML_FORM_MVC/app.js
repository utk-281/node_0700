let express = require("express");
let { MongoClient } = require("mongodb");
let fs = require("fs");
let myRoutes = require("./routes");

let app = express();

//! middleware
app.use(myRoutes);
app.use(express.urlencoded({ extended: true })); // express.urlencoded(), built in middleware, app level middleware

//? {extended : true} ==> it is using a module --> qs (with the help of this module we can parse nested data also, [[], [], {}, {{}, {}}])
//? {extended : false} ==> it is using a module --> querystring (not ne able to parse the nested data)

app.listen(9001, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9001");
});

// node filename
// nodemon filename
//! endpoint --> /abc
// parse
//! if i was not using the middleware the req.body gave me undefined
