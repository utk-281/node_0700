let express = require("express");
let { MongoClient } = require("mongodb");
let fs = require("fs");

let connectDB = async () => {
  let client = await MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("users");
  let collection = await database.createCollection("usersInfo");

  return collection;
};

let app = express();

//! middleware
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
app.post("/xyz", async (req, res) => {
  //! whatever endpoint is used in this method, pass the same in form action
  //! set the method to post in the form
  //! provide value to the name attribute
  // console.log(req.body);
  // { userName: 'abc', userEmail: 'abc@gmail.com', userPassword: '123' }

  // let result = req.body;
  let { userName, userEmail, userPassword } = req.body;

  //! since i have the data ==> i can store this data in some file
  fs.appendFileSync("./data.txt", `{${userName}, ${userEmail}, ${userPassword}}\\n`);
  //! since i have the data ==> i can store this in the database
  let myCollection = await connectDB();
  // console.log(myCollection);
  let data = await myCollection.insertOne({ userEmail, userName, userPassword });
  // console.log(data);

  res.send(`name : ${userName} with email : ${userEmail} has registered successfully`);
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});

// node filename
// nodemon filename
//! endpoint --> /abc
// parse
//! if i was not using the middleware the req.body gave me undefined
