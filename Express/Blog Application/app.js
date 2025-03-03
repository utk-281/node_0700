const express = require("express");
const { PORT } = require("./config/index");
const { connectDB } = require("./config/db");

let userRoutes = require("./routes/user.routes");
const { error } = require("./middlewares/error.middleware");

connectDB();

const app = express();

app.use(express.json());

app.use("/v1/users", userRoutes);

app.use(error);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port:", PORT);
});
