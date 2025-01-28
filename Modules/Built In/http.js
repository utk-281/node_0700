//! http ==> it stands for hyper text transfer protocol, which is used to define the communication between the client and the server

//! to communicate between client and server we use mainly 5 different methods
//? get() --> whenever the client wants to fetch/ read the resource from server. example ==> wikipedia, google, articles, blogs, youtube etc...

//? post() --> whenever the client want to send data to the server. example ==> register ,login, form, etc... (whenever client data is involved we use post())

//? put()
//? patch()
//? : --> both these methods are used to update the resource (updated the existing data). example ==> update profile, update blog ..... etc...

//? delete() --> whenever the client wants to delete the resource. example ==> delete profile, delete blog ..... etc...

//! in nodeJS http is a built in module, which is used to create a server.
const http = require("http"); // nodeJS uses commonJS format (by default node uses this format)
// import variable from "xyz" // ES6 format
// console.log(http);

//! steps to create a server
//! 1) import the module
//! 2) create a server using createServer()
//! 3) assign a port number to the server using listen()

let server = http.createServer((req, res) => {
  //! to send a response (this will be displayed on the browser UI)
  //   res.write("hello from server"); // write() is used to display the data on the browser UI
  //   res.end(); // this will end/ terminate your current req-res cycle

  res.write("hi");
  res.end("this will display the message and will end the current req res cycle");
});
// createServer() will be accepting a callback function with two parameters req and res

// a ==> req
// b ==> res

server.listen(9000, (abc) => {
  // listen() also accepts a callback function along with the port number
  if (abc) console.log(abc);
  console.log("server running at port 9000");
});
//! callback function is not mandatory here

//! to access your server type localhost:portNumber
// localhost:9000

//! to kill the server press ctrl + c on the terminal
