// //! 1) how synchronous and asynchronous execution happens

// //! 2) arrays and objects and it's methods like map, filter and keys, entries, etc..

// //! 3) Promises

// //! 4) how to handle promises --> a) then,catch,finally, b) async and await

// //! ============== 1) sync and async ======================

// //! a) synchronous execution
// // here the execution happens line by line
// console.log("start");
// console.log("middle");

// for (let i = 0; i < 200; i++) {
//   console.log(i);
// }
// // for this for loop getting executed we are waiting for 10 seconds
// console.log("end");

// console.log("hi my name is abc");
// // .....

// //? synchronous execution ==> it happens line by line and the execution is blocking in nature

// //! b) asynchronous execution

// setTimeout(() => {
//   console.log("inside setTimeout");
//   for (let i = 0; i < 100; i++) {
//     console.log(i);
//   }
// }, 0);
// console.log("start");
// console.log("middle");
// console.log("end");
// // 10 more statements at least 5 secs to get executed \
// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// //? asynchronous execution ==> it happens line by line but the execution is not blocking in nature

// //! ============= Promises ================

// //? promises ==> it is an object, which represents the eventual completion of an asynchronous operation

// let payload = fetch("url......"); // it may take 5 secs, 10 secs, or 30 mins
// console.log(payload); // {} --> promise object

// //? promise have three states --> pending, resolved and reject

// //! ==== javascript object and JSON =========

// let obj = {
//   key1: "value1",
//   key2: "value2",
//   key1: "abc",
//   fun1: function () {},
// };

// console.log(obj);

// let student = {
//   name: "Tapaswini", // key --> name and value --> Tapaswini,
//   skills: undefined,
// };

// //? json --> java script object notation, it is language independent and it is used to exchange data.

// let emp = {
//   name: "Tapaswini",
//   skills: ["html", "css", "js"],
// }; // it cannot store null and functions

//! async and await ==> both are used together, async is used in function declaration and await is used in function body. both are used to handle promises, async function will always return a promise

// let apiCall = async () => {
//   let payload = await fetch("https://jsonplaceholder.typicode.com/posts");
//   console.log(payload);
// };

// node.excalidraw;

let x = document.getElementsByTagName("p");
let y = document.querySelectorAll("p");
console.log(x.length);
console.log(y.length);

let p = document.createElement("p");
p.innerText = "hello world";
document.body.appendChild(p);
console.log(x.length);
console.log(y.length);
