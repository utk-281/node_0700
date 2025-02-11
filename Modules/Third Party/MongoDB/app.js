// npm ==> node package manager
//! package and modules are same thing

//! before installing any third party module, we must have a "package.json" file in our project folder, and there should be only one package.json file in the project folder

//! package.json ==> this file contains the details (meta data) of the project like name, version, description, author, etc..

//! to create a package.json file, we can use the following command:
//? 1) open the terminal with the correct path of the project folder
//? 2) type ==> "npm init -y" (express)
//? 3) install the particular third party module
//? 4) npm i or install module-name
//? 5) import the module

// when installed in total three changes will be made
//1) node_modules folder will be created :==> this contains the code for the third party module

//2) package-lock.json file will be created :==> this file contains the meta data of the third party module (like version ,integrity, etc..) all these are required to run a third party module

//3) package.json file will be updated :==> a new key is added named dependencies, which contains the name and version of the third party module

// let mongodb = require("mongodb");
// console.log(mongodb);

//! MongoClient ==> it is used to connect our nodeJS project to the database
// let mongodb = require("mongodb").MongoClient
/* 
mongodb = {
    key1: value1,
    key2: value2,
    MongoClient: value3,
}
*/

let { MongoClient } = require("mongodb");

let connectDB = async () => {
  //! establishing a connection to the database with the help of connect()
  let client = await MongoClient.connect("mongodb://localhost:27017");
  console.log("connection established");
  //   console.log(result);

  //! create a database using db("databaseName")
  let database = client.db("NodeDB");
  console.log("Database created");

  //! create a collection using createCollection("collectionName")
  let collection = await database.createCollection("users");
  console.log("collection created");

  //   collection.insertOne({ name: "John", city: "Delhi" });
  //   console.log("data inserted");

  //   let result = await collection.insertMany([{ name: "abc" }, { email: "abc@gmail.com" }]);
  //   console.log(result);

  //   let result = await collection.findOne({ name: "abc" });
  //   console.log(result);

  //   let res = await collection.find().toArray();
  //   console.log(res);
};

connectDB();
