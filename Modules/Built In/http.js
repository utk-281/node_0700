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
const fs = require("fs");
// import variable from "xyz" // ES6 format
// console.log(http);

//! steps to create a server
//! 1) import the module
//! 2) create a server using createServer()
//! 3) assign a port number to the server using listen()

// let server = http.createServer((req, res) => {
//   //! to send a response (this will be displayed on the browser UI)
//   //   res.write("hello from server"); // write() is used to display the data on the browser UI
//   //   res.end(); // this will end/ terminate your current req-res cycle
//   // res.write("hi");
//   // res.end("this will display the message and will end the current req res cycle");
//   // console.log(req); // {}
//   // console.log(res); // {}
//   // res.end();
// });
// // createServer() will be accepting a callback function with two parameters req and res

// // a ==> req
// // b ==> res

// server.listen(9000, (abc) => {
//   // listen() also accepts a callback function along with the port number
//   if (abc) console.log(abc);
//   console.log("server running at port 9000");
// });
//! callback function is not mandatory here

//! to access your server type localhost:portNumber
// localhost:9000

//! to kill the server press ctrl + c on the terminal

//! Routing ==> handling clients/ users multiple endpoint requests

// https://nodejs.org/en ==> url for home page (base url)
// https://nodejs.org/en/about ==> url for about page
// ==> baseURL/about
// https://nodejs.org/en/blog ==> url for blog page
// ==> baseURl/blog
// https://nodejs.org/en/download ==> url for download page

// /about, /blog, /download ==> endpoints
// baseURL/endpoints

// let server = http.createServer((req, res) => {
//   console.log(req.url);
// });

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("server running....");
// });

// // localhost:9000 ==> res : "/"
// // ! by default the endpoint for landing/ home page is "/"

// //! we can extract the endpoint from url property
// // format ==> let endpoint = req.url

//! display a message on the UI as hello world in h1 tag
// let server = http.createServer((req, res) => {
//   //! displaying html message
//   // res.writeHead(201, "myCustomMsg", { "Content-Type": "text/html" });
//   // res.end("<h1>hello world</h1>");
//   //! ======================= display a html page =======================
//   // let contents = fs.readFileSync("./Pages/index.html", "utf-8");
//   // res.end(contents);
//   // console.log(contents);
//   // console.log(req.url);
//   // res.end(`<h1>this is home page</h1>
//   //   <p>
//   //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptas ex provident
//   //     pariatur esse ratione aliquid quibusdam dolorum fuga nisi ducimus tenetur aspernatur quod
//   //     dicta architecto recusandae soluta porro voluptate quae culpa reprehenderit velit nulla! Nulla
//   //     ipsam vitae saepe obcaecati nam! Quisquam, accusantium consequuntur? Eligendi nihil labore
//   //     accusamus, nam maxime quas dio aut consectetur reiciendis, fuga veritatis dolorum?
//   //   </p>
//   //   <h2>this is sub heading</h2>
//   //   <h5>this is sub sub heading</h5>`);
//   //! ======================= display a css file =======================
//   // res.writeHead(200, "OK", { "Content-type": "text/css" });
//   // fs.readFile("./Pages/styles.css", "utf-8", (err, data) => {
//   //   if (err) console.log(err);
//   //   res.end(data);
//   // });
//   //! ======================= display a json file =======================
//   // res.writeHead(200, "ok", { "Content-Type": "application/json" });
//   // let value = fs.readFileSync("./Pages/data.json", "utf-8");
//   // res.end(value);
// });

//! whenever we are sending a response, we also have to set the headers of the response.
//! to set the headers of the response we use writeHead()
//! writeHead("statusMessage", statusCode, {"content-type":"value", })
// statusCode ==> 1XX, 2XX, 3XX, 4XX, 5XX
// 5XX ==> server error (500 ==> internal server error)
// 4XX ==> client error, (while submitting any kind of form) (400,401,404,403, etc...)
// 3XX ==> redirection (redirecting users from one page to another page) (301, 302)
// 2XX ==> success (200, 201)
// 1XX ==> information

// content-type ==> specifies which type of file is being send as a response
//? for html file ==> text/html
//? for css file ==> text/css
//? for js file ==> text/javascript
//? json ==> application/json
//? string ==> text/plain  "this is my string"

//? code as 200 ==> statusMessage : OK

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("server running...");
// });

// ==> /
// ==> /favicon

//! routing ==>

// let server = http.createServer((req, res) => {
//   //!home page
//   if (req.url === "/") {
//     res.writeHead(200, "OK", { "Content-Type": "text/plain" });
//     res.end("this is my home page");
//   }
//   //! html page
//   else if (req.url === "/html") {
//     // /Html
//     res.writeHead(200, "ok", "{Content-Type:text/html}");
//     let value = fs.createReadStream("./Pages/index.html");
//     value.pipe(res);
//   }
//   //! css page
//   else if (req.url === "/css") {
//     res.writeHead(200, "ok", "{Content-Type:text/css}");
//     fs.createReadStream("./Pages/styles.css").pipe(res);
//   }
//   //! json page
//   else if (req.url === "/json") {
//     // /Json
//     res.writeHead(200, "ok", "{Content-Type:application/json}");
//     fs.createReadStream("./Pages/data.json").pipe(res);
//   }
//   //! about page, download page and contact-us page
// });

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("server running...");
// });

//! we have create a routing which handles 5 endpoints i.e. home page, download page, about us and blogs page and a styles.css file
let server = http.createServer((req, res) => {
  //! home page
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.createReadStream("./Pages/index.html").pipe(res);
  }
  //! download page
  else if (req.url === "/download") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.createReadStream("./Pages/download.html").pipe(res);
  }
  //! about us page
  else if (req.url === "/about-us") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.createReadStream("./Pages/about-us.html").pipe(res);
  }
  //! blogs page
  else if (req.url === "/blogs") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.createReadStream("./Pages/blogs.html").pipe(res);
  } // endpoint ==> /blogs and ./blogs
  //! css
  else if (req.url === "/styles") {
    res.writeHead(200, "OK", { "Content-Type": "text/css" });
    fs.createReadStream("./Pages/styles.css").pipe(res);
  } //! pass the endpoint as ==> /endpoint-name
  else {
    res.end("page not found");
  }
});

//! user is requesting ==> /contact-me

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running .......");
});

//! compass ==> https://www.mongodb.com/try/download/community
//! shell ==> https://www.mongodb.com/try/download/shell
