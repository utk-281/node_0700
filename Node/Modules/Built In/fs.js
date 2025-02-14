//! const variableName = require('path')
//! const variableName = require("moduleName")
// const fs = require("fs");
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
// fs.writeFileSync("./data.txt", "hey, my name is abc");
// console.log("file created");
// console.log("end");

// console.log("start");
// console.log("middle");
// fs.writeFileSync("../data.txt", "let a = 10");
// console.log("file created");
// console.log("end");

//? in writeFileSync(), if the file is not present then it will create one file with the given data,
//? if the file is present, then the contents of the file will be overwritten with the new passed data

//! create a file demo.java inside user defined folder
// now it has to be done

// fs.writeFileSync("../User Defined/demo.java", "let a =10");

//! 2) reading/ fetching a file synchronously
// method name ==> readFileSync()
// syntax ==> fs.readFileSync("path", "encoding")
//? path ==> path of the file which you want to read
//? encoding ==> the data type which we want to display

// console.log("start");
// let data = fs.readFileSync("./data.txt"); // os --> source
// console.log(data); // 10 secs console --> destination
// /* <Buffer 6c 65 74 20 61 20 3d 20
//  31 30 0d 0a 0d 0a 6d 79 20 6e
// 61 6d 65 20 69 73 20 62 6c 61 6
// 8 20 62 6c 61 68 20 62 6c 61 68
// > it is an array, if we want to convert this buffer value into a readable data */
// // buffer ==> [ 6c, 65, 74, 20......... ]
// // to convert buffer value to readable data use toString()
// // streams and buffer
// console.log(data.toString());
// console.log("file read");
// console.log("middle");
// console.log("end");

// console.log("start");

// let data = fs.readFileSync("./data.txt", "utf-8");
// // utf ==> unicode transformation format
// // buffer --> array of values which is not in readable format
// console.log(data);

// console.log("middle");
// console.log("end");

// let myName = "abc";
// console.log(myName); // abc
// console.log("myName"); // myName

//! 3) appending/ updating a file synchronously
// updating -->  1) add something  2) modify the existing data (this is not possible with this method, partial modification is not possible)
// append --> add some data at the end of something
// method name ==> appendFileSync()
// syntax ==> fs.appendFileSync("path", "data")
//? path ==> path of the file which you want to update
//? data ==> new data to be added

// console.log("start");
// console.log("middle");

// fs.appendFileSync("./data.txt", "\n this is my added statement"); // previous contents will not be over written
// console.log("file updated/ appended");

// console.log("end");

//!4)  deleting a file
// method name ==> unlinkSync()
// syntax ==> fs.unlinkSync("path")

// console.log("start");
// console.log("middle");

// fs.unlinkSync("./data.txt");
// console.log("file deleted");

// console.log("end");

//! ques ==> copy the contents of "fs.js" and paste it into new file "app.js" in the current folder
// let payload = fs.readFileSync("./fs.js", "utf-8");
// console.log(payload);
// fs.writeFileSync("./app.js", payload);
// console.log("file has been copied");

//! === operations that can be performed on folders ==> create, delete or update

//! 5) creating a folder
// method name ==> mkdirSync() ==> make directory/ folder
// syntax ==> fs.mkdirSync("path/folderName")

// console.log("Start");
// fs.mkdirSync("./demo");
// console.log("middle");
// console.log("end");

//? create a server folder inside this Demo folder
// fs.mkdirSync("../../Demo/Server");
// console.log("folder created");
// ~/Desktop/Node 0700 ......../built in

//! 5) deleting a folder
// method name ==> rmdirSync()
// syntax ==> fs.rmdirSync("path/folderName")

// console.log("Start");
// console.log("middle");
// fs.rmdirSync("./demo");
// console.log("folder deleted");
// console.log("end");

//! 6) renaming a folder/file
// method name ==> renameSync()
// syntax ==> fs.renameSync("oldPath", "newPath")

// fs.renameSync("./app.js", "./server.txt"); // file renaming
// fs.renameSync("./demo", "./html"); // folder renaming

//! ========== asynchronous execution ==================

//! === using callbacks ===

//! 1) creating a file
// method name ==> writeFile()
// syntax ==> fs.writeFile("path/filename", "data", callback function)

// console.log("Start");

// fs.writeFile("./demo.py", "let a = 10", (err) => {
//   // error first callbacks
//   if (err) console.log(err);
//   console.log("file created");
// }); // () => {} it is a callback function

// //! error first callbacks ==> error first callbacks are used to handle errors in asynchronous execution, where the first parameter is the error

// console.log("middle");
// console.log("end");

// fs.writeFile("./demo.py", "let b = 10", (err) => {
//   // error first callbacks
//   if (err) console.log(err);
//   console.log("file created");
// });

// //? in writeFileSync(), if the file is not present then it will create one file with the given data,
//? if the file is present, then the contents of the file will be overwritten with the new passed data

//! WHILE CREATING A FOLDER, AND IT ALREADY EXISTS THEN IT WILL THROW AN ERROR, ON THE OTHER HAND WHILE CREATING A FILE AND IT ALREADY EXISTS THEN IT WILL OVER WRITE THE EXISTING FILE

//! 2) fetching/ reading a file
// method name ==> readFile()
// syntax ==> fs.readFile("path", "encoding", cb)

// console.log("start");

// fs.readFile("./demo.java", "utf-8", (err, data) => {
//   if (err) console.log(err);

//   console.log(data);
//   console.log("file read");
// });

// console.log("middle");
// console.log("end");

//! 3) updating/ appending a file
// method name ==> appendFile()
// syntax ==> fs.appendFile("path", "data", cb)

// console.log("start");

// fs.appendFile("./demo.py", `\nmyname="abc"`, (err) => {
//   // ``==> template literals/ backticks
//   if (err) console.log(err);

//   console.log("file updated");
// });

// console.log("middle");
// console.log("end");

//! 4) deleting a file
// method name ==> unlink()
// syntax ==> fs.unlink("path", cb)

// fs.unlink("./demo.py", (err) => {
//   if (err) console.log(err);
//   console.log("file deleted");
// });

//! 5) creating a folder
// method name ==> mkdir()
// syntax ==> fs.mkdir("path/folderName", cb)

// fs.mkdir("./css", (err) => {
//   if (err) console.log(err);
//   console.log("folder created");
// });

//! 6) deleting a folder

//! 7) renaming a folder/file

// github.com/utk-281/node_0700

//! === using promises ===
//? promises are used to handle asynchronous execution
// let fs1 = require("fs");
// console.log(fs1); // asynchronous execution is possible using callbacks

let fs = require("fs").promises; // asynchronous operation will be returning me a promise
// console.log(fs);
// let fs = require("fs/promises");
// it means that whenever we are going to use methods of fs, it will be returning a promise

//! 1) creating a file
// method name ==> writeFile()
// syntax ==> fs.writeFile("path/filename", "data")

// let value = fs.writeFile("./index.html", "<h1>hello world</h1>");
// console.log(value);

// value
//   .then(() => {
//     // promise is not giving me a value
//     // console.log(abc); // undefined
//     console.log("file created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// writeFileSync() --> synchronous
// writeFile() --> asynchronous

//! 2) reading a file
// method name ==> readFile()
// syntax ==> fs.readFile("path", "encoding")

// let value = fs.readFile("../../Demo/javascript.js", "utf-8"); // value = {Promise pending}
// value
//   .then((data) => {
//     // if the promise contains any kind of value
//     console.log(data); //?
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 3) updating/ appending a file
// method name ==> appendFile()
// syntax ==> fs.appendFile("path", "data")
// let value = fs.appendFile("./index.html", "<p>my name abc</p>");
// value
//   .then(() => {
//     console.log("file appended");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// s;
// let val = fs.appendFile("./index.html", "<h2>I am Narendra updated</h2>");
// val
//   .then(() => {
//     console.log("File appended");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? if we are using appendFile() and the file that we are updating exists then it will simply add the data,
//? if the file dne then it will create one file with the given data

//! 4) deleting a file
// method name ==> unlink()
// syntax ==> fs.unlink("path")

// fs.unlink("./index.html")
//   .then(() => {
//     console.log("file deleted");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//!  5) create a folder
// method name ==> mkdir()
// syntax ==> mkdir("folderName/path")

// fs.mkdir("./sample")
//   .then(() => {
//     console.log("folder created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 6) deleting a folder
// method name ==> rmdir()
// syntax ==> fs.rmdir("folderName/path")

// fs.rmdir("./sample")
//   .then(() => {
//     console.log("folder deleted");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 7) renaming a folder/file
// method name ==> rename()
// syntax ==> fs.rename("oldPath", "newPath")

// fs.rename("./sample", "./sample1")
//   .then(() => {
//     console.log("folder renamed");
//   })
//   .catch((err) => {
//     console.log(err);
//   }); // folder renaming

// fs.rename("./demo.js", "./sample.java")
//   .then(() => {
//     console.log("file renamed");
//   })
//   .catch((err) => {
//     console.log(err);
//   }); // file renaming

//! BlogApp --> backend --> controller --> userController.js (create inside built-in)
// first using synchronous execution
// async --> using promises, callbacks (any one way)'
let fs1 = require("fs").promises;
// fs1.mkdirSync("./BlogApp");
// console.log("folder created");
// fs1.mkdirSync("./BlogApp/backend");
// fs1.mkdirSync("./BlogApp/backend/controller");
// fs1.writeFileSync("./BlogApp/backend/controller/userController.js", "hi this is controller");

// fs1
//   .mkdir("./BlogApp")
//   .then(() => {
//     fs1
//       .mkdir("./BlogApp/backend")
//       .then(() => {
//         fs1
//           .mkdir("./BlogApp/backend/controller")
//           .then(() => {
//             fs1
//               .writeFile("./BlogApp/backend/controller/userController.js", "let a = 20")
//               .then(() => {})
//               .catch((err) => {
//                 console.log(err);
//               });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! using async and await --> both are used in pairs, async is used in function declaration and await is used inside function body, we have to use await at statements where is is returning a promise.

//! 1)  creating a folder

async function createFile() {
  let value = await fs.writeFile("./data.txt", "this is my data");
  console.log(value);
  console.log("file created");
}

// createFile();

//! BlogApp --> backend --> controller --> userController.js (using async and await)

async function abc() {
  await fs.mkdir("./BlogApp");
  console.log("BlogApp folder created");
  await fs.mkdir("./BlogApp/backend");
  console.log("backend created");
  await fs.mkdir("./BlogApp/backend/controller");
  console.log("controller created");
  await fs.writeFile("./BlogApp/backend/controller/users.js", "let a = John");
  console.log("file created");
}
// abc();

//! whatever operations that we performed (sync/ async) it was not using streams

let fs2 = require("fs");
const { start } = require("repl");

let data = fs2.readFileSync("./fs.js"); // source --> os (the file is present on my laptop)
// console.log(data); // destination --> console (print it) // we are getting a buffer value
/* <Buffer 2f 2f 21 20 63 6f 6e 73 0100001010001
 74 20 76 61 72 69 61 62 6c 65 
4e 61 6d 65 20 3d 20 72 65 71 7
5 69 72 65 28 27 70 61 74 68 27
 29 0d 0a 2f 2f 21 20 63 6f 6e 
 73 ... 12472 more bytes>


!  NODEJS BUFFER -->
! datatype of the output --> hexadecimal
! originally it holds data in binary(0, 1) format
! it is an array which is fixed in size
*/
// 2+2 ==> 010010 --> 1a (0901010) 0101010 => result 01010010101 (binary)
// 1a e 1a == 2a
// console.log(res) // ==> 4

//! Buffer --> array of values which is not in readable format
//~ we can manipulate the buffer values using it's methods

let fs3 = require("fs");

let value2 = fs3.createReadStream("./index.html", { highWaterMark: 50 });

value2.on("data", (chunk) => {
  console.log(`this is my chunk --> ${chunk} -->  of size ${chunk.length}\n`);
});

//! streaming ==> copying data from source to destination in continuous manner. In nodeJS we have 4 different types of streams

// ==> 1) readable stream  --> this is used for reading data in continuous manner(chunks), method that we use is "createReadStream("path of the file")"

// ==> 2) writable stream --> this is used for writing data in continuous manner, method name ==> createWriteStream("path/filename")

// ==> 3) duplex stream --> in this we can perform reading/ writing at the same time (copy/pasting)

// ==> 4) transform stream --> it is similar to duplex, but here we can modify the chunks

let fs5 = require("fs");

//! reading the contents in chunks
// method name ==> createReadStream("path", "encoding")

let value = fs5.createReadStream("./index.html", "utf-8"); // ==> createReadStream generate an event called "data"
// console.log(value);

// to catch/execute any event ==> on("the name of the event", cb)
// to emit and event ==> emit("the name of the event")

// value.on("data", (chunk) => {
//   console.log(chunk);
// });

//! writing the contents in chunks
// method name ==> createWriteStream("path/ filename")

let file = fs5.createWriteStream("./demo.java"); // this method will be developing a stream
// console.log(file);

file.write("let a = 10", () => {
  console.log("file created");
});

//! duplex stream ==> both operation at the same time
// source --> index.html file / server
// destination --> demo.java file / we browser or end()

let contents = fs5.createReadStream("./index.html", "utf-8");
let newFile = fs5.createWriteStream("./demo.java");

// to connect source and destination we use pipe()
//! syntax ==> source.pipe(destination)
contents.pipe(newFile);
