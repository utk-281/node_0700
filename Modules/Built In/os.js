//! os ==> this module provides about the operating system

let os = require("os");
// console.log(os);

//! arch() --> it returns CPU architecture
// console.log(os.arch());

//! constants --> it returns an object containing the os constants for processing signals, error, etc.
// console.log(os.constants);

//! cpus() --> it returns an array of objects containing information about each CPU/core installed
// console.log(os.cpus());

//! endianness() --> it tells the byte-orders, how the system stores data in memory ( 0x00 upto 0xFF, LE --> little-endian, BE --> big-endian)
// console.log(os.endianness());

//! freemem() --> it returns the amount of free memory in bytes
// console.log(os.freemem());

//! hostname() --> it returns the name of the operating system
// console.log(os.hostname());

//! networkInterfaces() --> it returns an object containing network interfaces that have been assigned a network address
// console.log(os.networkInterfaces());

//! platform() --> it returns the operating system platform
// console.log(os.platform());

//! totalmem() --> it returns the total amount of memory in bytes
// console.log(os.totalmem());

//! release() --> it returns the operating system release
// console.log(os.release());

//! type() --> it returns the operating system name
// console.log(os.type());

//! uptime() --> it returns the system uptime in seconds
// console.log(os.uptime());

//! userInfo() --> it returns information about the currently effective user
// console.log(os.userInfo());
