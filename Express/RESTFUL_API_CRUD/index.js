//! mongoose ==> it is a library for mongoDB, with the help of this we can connect with database and perform operations on database in much simpler way. we can also set the schema/structure of the database and can validate also.

let express = require("express");
const { connectDB } = require("./config/database");
let userRoutes = require("./routes/users.routes");

//! dotenv module is used to access the environment variables and config is used to parse(or read) the environment variables
require("dotenv").config();

connectDB();

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/v1/users", userRoutes);

// console.log(process.env);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log("server running at port: ", process.env.PORT);
});

//! dependencies
//? 1) production dependencies
// npm i <module_name1> <module_name2>
// npm i <module_name1> <module_name2> --save
// npm i <module_name1> <module_name2> --save--prod
//? 2) development dependencies
// npm i module-name --save-dev
// npm i module-name -D

//? npm i module-name -g --> will install the module globally (in your system)

/* 

{
    name: "string",
    age: number,
    skills:[{}, {}]
    key: {[], [], []}

    
    }
    db.createCollection("users", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "age", "skills"],
          properties: {
            name: {
              bsonType: "String",
            },
            age: {
              bsonType: "number",
            },
            skills: {
              bsonType: "array",
              items: {
                bsonType: "string",
              },
            },
          },
        },
      },
    });

*/
