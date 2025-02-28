const express = require("express");
const { PORT } = require("./config/index");
const { connectDB } = require("./config/db");

let userRoutes = require("./routes/user.routes");

connectDB();

const app = express();

app.use(express.json());

app.use("/v1/users", userRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port:", PORT);
});
