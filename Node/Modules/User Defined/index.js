//! start unpacking/ importing
//! we have 2 different ways to import

//! === 1st way ==> using dot notation
// syntax:
// let/ const variableName = require("path of the file");
//  require() is a method
//? example --> let value = require("./app.js")

//! relative path --> relative path refers to the path which is relative to the file we are currently using
// absolute path --> absolute specifies the path from the root

// let value = require("./app"); // here all the data or values that we are importing are stored in on variable nad we are accessing the data using dot notation

// console.log(value);
/* value = {
  printHello: [Function: printHello],    
  printMyName: [Function: printMyName],  
  var1: 'abc',
  arr: [ 'html', 'css', 'js' ]
} */

// console.log(value.printHello());
// value.printMyName("abc");
// console.log(value.var1);
// console.log(value.arr);

//! === 2nd way ==> object destructure

// let { printHello, printMyName, arr, var1 } = require("./app.js");

// console.log(printHello());
// printMyName("abc");
// console.log(arr);
// console.log(var1);

//! import the module using any of the two methods

let { add, multiply } = require("./app");
console.log(add(2, 3));
console.log(multiply(10, 2, 3));
