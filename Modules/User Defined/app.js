let printHello = () => {
  return "hello world";
};

let printMyName = (name) => {
  console.log(`hi my name is ${name}`);
};

let var1 = "abc";

let arr = ["html", "css", "js"];

// printHello();
// printHello();
// printHello();
// printHello();
// printHello();

// folder and directory both are same

//! to pack/ export we have 2 different ways

//! 1st way of exporting
// module.exports = {
//   printHello,
//   printMyName,
//   var1,
//   arr,
// };

//! 2nd way of exporting

exports.add = (a, b) => {
  return a + b;
};

exports.multiply = (a, b, c) => {
  return a * b * c;
};

// module.exports = {
//   add,
//   multiply,
// };
