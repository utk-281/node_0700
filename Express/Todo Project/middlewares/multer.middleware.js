// multer ==> this is used for handling multipart/form-data, which is primarily used for uploading files.
const multer = require("multer");

//multer.diskStorage() ==> it is used to define where and how the uploaded files should be stored.
const myStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp/img");
  },
  // destination ==> it is used to determine within which folder the uploaded files should be stored.
  // cb ==> it is a callback function that is called once the destination is determined.
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
  // filename ==> it is used to determine what the file should be named inside the folder.
  // cb ==> it is a callback function that is called once the filename is determined.
});

const upload = multer({ storage: myStorage });
// we are initializing the multer and passing the storage object to it.

module.exports = upload;
// then we are exporting it
