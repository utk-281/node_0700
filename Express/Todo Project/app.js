const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config/index");
const { connectDB } = require("./config/db");

const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");
const adminRoutes = require("./routes/admin.routes");

const { error } = require("./middlewares/error.middleware");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/v1/users", userRoutes);
app.use("/v1/todos", todoRoutes);
app.use("/v1/admin", adminRoutes);

//! error middleware
app.use(error);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
