const todoModel = require("../models/todo.model"); // ==> node commonJS
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");

// import todoModel  from "../models/todo.model"; ==> react ES6

exports.addTodo = asyncHandler(async (req, res) => {
  let { title, description, dueDate, priority, status } = req.body;

  let newTodo = await todoModel.create({
    title,
    description,
    dueDate,
    priority,
    status,
    createdBy: req?.user?._id,
  });

  res.status(201).json({ success: true, message: "Todo added", newTodo });
});

exports.fetchAllTodos = asyncHandler(async (req, res) => {
  let allTodos = await todoModel.find({ createdBy: req?.user?._id });

  if (allTodos.length === 0) throw new ErrorHandler(404, "No todos found");

  res.status(200).json({ success: true, message: "All todos", allTodos });
});
