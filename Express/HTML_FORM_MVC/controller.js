let fs = require("fs");
const { connectDB } = require("./database");

let displayHomePage = (req, res) => {
  //   res.send("this is home page");
  fs.createReadStream("./pages/home.html").pipe(res);
};

let displayFormPage = (req, res) => {
  //   res.send("this is signup page!!!!"); // name, email, password
  fs.createReadStream("./pages/signup.html").pipe(res);
};

let displayAboutPage = (req, res) => {
  res.send("<h1>this is about page</h1>");
};

let handleFormSubmit = async (req, res) => {
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
};

module.exports = {
  displayHomePage,
  displayFormPage,
  displayAboutPage,
  handleFormSubmit,
};
