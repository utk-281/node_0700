//! phase-1) timers ==> this will handle setTimeout() and setInterval()
//! phase-2) pending callbacks ==> this is used for handling the callbacks that are present in the queue
//! phase-3) idle, prepare ==> this is used by event-loop, for internal housekeeping
//! phase-4) poll ==> this is used to handle operations like file read,network etc..
//! phase-5) check ==> this is used to handle setImmediate()
//! phase-6) close callbacks ==> It is used for closing events

//! nextTick(), queueMicrotask(), Promises ==> are executed in between the phases of event loop
//? nextTick has higher priority than queueMicrotask and Promise
//? queueMicrotask and Promise have same priority, whichever comes first will be executed

// console.log("1-start ");
// console.log("2-middle");

// setTimeout(() => {
//   console.log("3- inside setTimeout");
// });

// process.nextTick(() => {
//   console.log("4- inside nextTick");
// }); // it is a simple callback function (which will get executed between the phases of event loop)

// console.log("5- end");

//! =========================================================================================

// setImmediate(() => {
//   console.log("1-inside setImmediate");
// });

// Promise.resolve().then(() => {
//   console.log("3-inside Promise");
// });

// queueMicrotask(() => {
//   console.log("2-inside queueMicrotask");
// });

// console.log("4- end");
//! 4, 2, 3, 1

//! ============================================================================================
// console.log("1-start ");
// console.log("2-middle");

// setTimeout(() => {
//   console.log("3- inside setTimeout");
// });

// process.nextTick(() => {
//   console.log("4- inside nextTick");
// }); // it is a simple callback function (which will get executed between the phases of event loop)

// setImmediate(() => {
//   console.log("5-inside setImmediate");
// });

// Promise.resolve().then(() => {
//   console.log("6-inside Promise");
// });

// queueMicrotask(() => {
//   console.log("7-inside queueMicrotask");
// });

// setTimeout(() => {
//   console.log("8_inside setTimeout");
// });

// console.log("9- end");

/* 1-start
2-middle
9- end
4- inside nextTick
6-inside Promise
7-inside queueMicrotask
3- inside setTimeout
5-inside setImmediate
8_inside setTimeout
 */
//?! async ==> nexTick, (Promise-queueMicrotask)

//! =====================================================================================

// fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
//   console.log("1-inside fetch");
// });

// Promise.resolve().then(() => {
//   console.log("2-inside Promise");
// });

// process.nextTick(() => {
//   console.log("3-inside nextTick");
//   process.nextTick(() => {
//     console.log("4-inside nested nextTick");
//   });
// });

// process.nextTick(() => {
//   console.log("5-inside nextTick");
// });

//! 3, 5, 4, 2, 1

//! ===========================================================================================
// setTimeout(() => {
//   console.log("1-inside setTimeout");
// });
// setTimeout(() => {
//   console.log("2-inside setTimeout");
// });
// setTimeout(() => {
//   console.log("3-inside setTimeout");
// });

// process.nextTick(() => {
//   console.log("4-inside nextTick");
// });

// process.nextTick(() => {
//   console.log("5-inside nextTick");

//   process.nextTick(() => {
//     console.log("6-inside nextTick");
//   });

//   process.nextTick(() => {
//     console.log("7-inside nextTick");
//   });

//   process.nextTick(() => {
//     console.log("8-inside nextTick");
//   });
// });

//! ===========================================================================================

// setTimeout(() => {
//   console.log("1-inside setTimeout");
// });

// setTimeout(() => {
//   console.log("2-inside setTimeout");

//   process.nextTick(() => {
//     console.log("3-inside nextTick");
//   });
// });

// process.nextTick(() => {
//   console.log("4-inside nextTick");
// });

//! =======================================================================================

// setTimeout(() => {
//   console.log("1-inside setTimeout");
// });

// setTimeout(() => {
//   console.log("2-inside setTimeout");

//   process.nextTick(() => {
//     console.log("3-inside nextTick");
//   });

//   Promise.resolve().then(() => {
//     console.log("4-inside Promise");
//   });
// });

// process.nextTick(() => {
//   console.log("5-inside nextTick");
// });

//! ==================================================================================
const fs = require("fs");

// fs.readFile("./libuv.js", "utf-8", (err, data) => {
//   console.log("1-inside readFile");
// });

// queueMicrotask(() => {
//   console.log("2-inside queueMicrotask");
// });

// process.nextTick(() => {
//   console.log("3-inside nextTick");

//   process.nextTick(() => {
//     console.log("4-inside nested nextTick");
//   });
// });

//! =====================================================================================
// fs.readFile("./libuv.js", "utf-8", (err, data) => {
//   console.log("1-inside readFile");
// });

// process.nextTick(() => {
//   console.log("2-inside nextTick");

//   setImmediate(() => {
//     console.log("3-inside setImmediate");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("4-inside Promise");
// });

//! =======================================================================
// fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
//   console.log("1-inside fetch");
// });
// fs.readFile("./libuv.js", "utf-8", (err, data) => {
//   console.log("2-inside readFile");
// });
// setImmediate(() => {
//   console.log("3-inside setImmediate");
// });
// queueMicrotask(() => {
//   console.log("4-inside queueMicrotask");
// });
// Promise.resolve().then(() => {
//   console.log("5-inside Promise");
// });
// process.nextTick(() => {
//   console.log("6-inside nextTick");
// });
// setTimeout(() => {
//   console.log("7-inside setTimeout");
// });
// setImmediate(() => {
//   console.log("8-inside setImmediate");
// });
// setTimeout(() => {
//   console.log("9-inside setTimeout");
// }, 10000);

//! ========================================================================
setTimeout(() => {
  console.log("1-inside setTimeout");
});

// console.log("2-inside console.log");

setImmediate(() => {
  console.log("3-inside setImmediate");
});

// setTimeout(() => {
//   console.log("4-inside setTimeout");
// }, 5);

//! priority ==>
//sync
// nexTick
// queueMQ/Promise
// timers ==> 0 >>
// setImmediate
// fs/ nw operations
// fetch()
