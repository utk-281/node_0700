//! --> we have to make sure that our project folder contains one file that is package.json file, and there should be only one package.json file in the project folder.

//! --> to create a package.json file type command in terminal: "npm init -y" or "npm init"
//? a) npm init -y : it will create a package.json file with default values.
//? a) npm init : it will create a package.json file with the values that user has provided.

//! package.json --> it contains all the information about the project like project name, version, description, entry point, scripts, and along with that it also contains the dependencies that are required for the project.
//? scripts --> it allows us to create a shortcut command to run the project.
//? main  --> it is the starting point of the project, this file will get executed first when we run the project.
//? dependencies --> it contains the list of all the modules that are installed/ required for the project.

//! npm ==> node package manager. it is default package manager for nodeJS. with the help of this we can manage (create, install, update, delete) the packages that are required for the project.

//? to install any third party module/package we have to use the command
//? npm i/ install <pn-1> <pn-2> <pn-3> ... <pn-n>

//! steps to start a project:
//? 1) create a project folder.
//? 2) create a package.json file. (npm init -y, npm init)
//? 3) install the required modules. (npm i <module-name>)

//! step-1) require the express module
let express = require("express");
// console.log(express);

//! step-2) call the top level function
//! calling top level function
let app = express();

//! step-4) routing
//? home page
app.get("/", (req, res) => {
  res.send("Hello World");
});

//? download page
app.get("/download", (req, res) => {
  res.send(`<h1> Download Page </h1>`);
});

//! step-3) assign a port number
app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server is running on port 9000");
});

//! http://localhost:9000/
//! protocol://domain-name:port-number/ --> endpoint is /
// req.url==="/"
