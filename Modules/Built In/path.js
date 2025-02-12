//! path module provides utilities(functions/ variables/ classes) for working with file and directory/folders paths.
// console.log(__filename); // complete path of the file
//? C:\Users\utkar\Desktop\Classes\Node 0700\Modules\Built In\path.js
// console.log(__dirname); // complete path of the directory
//? C:\Users\utkar\Desktop\Classes\Node 0700\Modules\Built In
console.log("Path Module");

//! global variable, objects, functions ==> these variables, functions and objects are available in all the files i.e. these can be used without any import statement

// fs.writeFileSync("filename/path", "data");

let path = require("path");
// console.log(path);

//! 1. basename() --> return the last part/base part of the path
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.basename("F:/Users/myOwnPath/myFile.txt")); // myFile.txt
// console.log(path.basename("F:/Users/myOwnPath")); //myOwnPath

//! 2. extname() --> return the extension of the file
//? C:\Users\utkar\Desktop\Classes\Node 0700\Modules\Built In\path.js
// console.log(path.extname(__filename)); // .js
// //? C:\Users\utkar\Desktop\Classes\Node 0700\Modules\Built In
// console.log(path.extname(__dirname)); // ""
// console.log(path.extname("F:/Users/myOwnPath/myFile.txt")); // .txt

//! 3. parse() --> it is used to convert the path to an object
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));
// console.log(path.parse("F:/Users/myOwnPath/myFile.txt"));

//! 4. format() --> it is used to convert the object to path string
// let pathObj = {
//   root: "F:/",
//   dir: "F:/Users/myOwnPath",
//   base: "myFile.txt",
//   ext: ".txt",
//   name: "myFile",
// };
// console.log(path.format(pathObj));
// console.log(path.format(path.parse(__filename)));

//! 5. isAbsolute()
//? C:\Users\utkar\Desktop\Classes\Node 0700\Modules\Built In\path.js --> absolute
//? ./http.js --> relative

// console.log(path.isAbsolute("C:/Users/utkar/Desktop/Classes/Node 0700/Modules/Built In/path.js"));
// console.log(path.isAbsolute("./http.js"));

//! 6. join() --> it is used to join the paths
// console.log(path.join("folder1", "folder2", "data.txt"));
// folder1\folder2\data.txt

// console.log(path.join("/folder1", "folder2", "data.txt"));
// \folder1\folder2\data.txt

// console.log(path.join("/folder1", "/folder2", "/data.txt"));
// \folder1\folder2\data.txt

// console.log(path.join("folder1", "//folder2", "data.txt"));
// folder1\folder2\data.txt

console.log(path.join("folder1", "//folder2", "../data.txt"));
// folder1\data.txt
//? if we are using ../ then it will ignore the previous path
