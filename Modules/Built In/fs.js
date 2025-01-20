//! const variableName = require('path')
//! const variableName = require("moduleName")
const fs = require("fs");
// console.log(fs);

//! CRUD ON FILES IN SYNCHRONOUS(SYNC) WAY

//! 1) Creating a file
// method name ==> writeFileSync()
// syntax ==> fs.writeFileSync("filename/path", "data")
//? the first parameter is the path of the file and also the name
//? the second parameter is the data that we want to write
// you can give any extension of the file you want

// console.log("start");
// console.log("middle");
// fs.writeFileSync("./data.txt", "let a = 10");
// console.log("file created");
// console.log("end");

// console.log("start");
// console.log("middle");
// fs.writeFileSync("../data.txt", "let a = 10");
// console.log("file created");
// console.log("end");

//! create a file demo.java inside user defined folder
// now it has to be done

// fs.writeFileSync("../User Defined/demo.java", "let a =10");

//! 2) reading/ fetching a file synchronously
// method name ==> readFileSync()
// syntax ==> fs.readFileSync("path", "encoding")
//? path ==> path of the file which you want to read
//? encoding ==> todo

console.log("start");
let data = fs.readFileSync("./data.txt");
console.log(data.toString()); // 10 secs
/* <Buffer 6c 65 74 20 61 20 3d 20
 31 30 0d 0a 0d 0a 6d 79 20 6e 
61 6d 65 20 69 73 20 62 6c 61 6
8 20 62 6c 61 68 20 62 6c 61 68
> it is an array, if we want to convert this buffer value into a readable data */
console.log("file read");
console.log("middle");
console.log("end");

let myName = "abc";
console.log(myName); // abc
console.log("myName"); // myName
