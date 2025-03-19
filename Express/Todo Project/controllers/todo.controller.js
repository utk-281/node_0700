const todoModel = require("../models/todo.model"); // ==> node commonJS
const asyncHandler = require("express-async-handler");

// import todoModel  from "../models/todo.model"; ==> react ES6

exports.addTodo = asyncHandler(async (req, res) => {
  let { title, description, dueDate, priority, status } = req.body;

  let newTodo = await todoModel.create({
    title,
    description,
    dueDate,
    priority,
    status,
  });

  res.status(201).json({ success: true, message: "Todo added", newTodo });
});
