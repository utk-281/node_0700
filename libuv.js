const os = require("os");

// console.log(os.cpus().length);

process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require("crypto");
let startTime = Date.now();

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err) => {
  console.log("function1", Date.now() - startTime);
  console.log();
});
crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err) => {
  console.log("function2", Date.now() - startTime);
  console.log();
});

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err) => {
  console.log("function3", Date.now() - startTime);
  console.log();
});
crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err) => {
  console.log("function4", Date.now() - startTime);
  console.log();
});

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err) => {
  console.log("function5", Date.now() - startTime);
  console.log();
});
