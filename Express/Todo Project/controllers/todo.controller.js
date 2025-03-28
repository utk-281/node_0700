const todoModel = require("../models/todo.model"); // ==> node commonJS
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { parse, format } = require("date-fns");
const userModel = require("../models/user.model");

// import todoModel  from "../models/todo.model"; ==> react ES6

exports.addTodo = asyncHandler(async (req, res) => {
  let { title, description, dueDate, priority, status } = req.body;

  let parsedDate = parse(dueDate, "dd/MM/yyyy", new Date());

  let newTodo = await todoModel.create({
    title,
    description,
    dueDate: parsedDate,
    priority,
    status,
    createdBy: req?.user?._id,
  });

  // await userModel.findByIdAndUpdate(req.user._id, { $inc: { totalNumberOfTasks: 1 } });
  await userModel.updateOne({ _id: req.user._id }, { $inc: { totalNumberOfTasks: 1 } });

  res.status(201).json({ success: true, message: "Todo added", newTodo });
});

exports.fetchAllTodos = asyncHandler(async (req, res) => {
  console.log(req.query); // { status: 'false', priority: 'high' }

  let filter = { createdBy: req.user._id };

  // console.log(filter); { createdBy: new ObjectId('67e4b13dc949525d8240ef20',), status:"value" }

  //! based on status
  if (req.query.status) {
    //  ?status=true/false
    filter.status = req.query.status;
  }

  if (req.query.priority) {
    // ?priority=low/medium/high
    filter.priority = req.query.priority;
  }

  console.log(filter);
  /* {
  createdBy: new ObjectId('67e4b13dc949525d8240ef20'),
  status: 'false',
  priority: 'high'
} */

  let sortOptions = {};
  if (req.query.sort) {
    // ? sort=dueDate_asc/ dueDate_desc
    console.log(req.query.sort); //  'dueDate_asc'
    console.log(req.query.sort.split("_")); // [ 'dueDate', 'asc' ]
    const [field, order] = req.query.sort.split("_");

    let value = order === "asc" ? 1 : -1;
    sortOptions[field] = value;
  }

  console.log(sortOptions); // { dueDate: 1 }

  let allTodos = await todoModel.find(filter).sort(sortOptions);

  //! filter features ==> based on priority(low, medium, high), status(true, false) and dueDate --> ascending/descending order

  //! filtering todos based on keywords -->

  let mappedTodos = allTodos.map((todo) => ({
    ...todo._doc,
    dueDate: format(todo.dueDate, "dd MMMM yyyy"),
    createdAt: format(todo.createdAt, "dd MMMM yyyy, HH:mm"),
    updatedAt: format(todo.updatedAt, "dd MMM yyyy, HH:mm"),
  }));

  if (allTodos.length === 0) throw new ErrorHandler(404, "No todos found");

  res
    .status(200)
    .json({ success: true, message: "All todos", count: allTodos.length, mappedTodos });
});

exports.fetchOneTodo = asyncHandler(async (req, res) => {
  // let todo = await todoModel.findOne({ _id: req.params.id, createdBy: req.user._id, });
  let todo = await todoModel
    .findOne({
      $and: [{ _id: req.params.id }, { createdBy: req.user._id }],
    })
    .populate("createdBy");
  // select("fieldName1 fieldName2  .....") ==> this will display only these fields
  // select("-fieldName1 -fieldName2  .....") ==> this will exclude these fields
  if (!todo) throw new ErrorHandler(404, "Todo not found");

  res.status(200).json({ success: true, message: "Todo found", todo });
});

exports.updateTodo = asyncHandler(async (req, res) => {
  let updatedTodo = await todoModel.findOneAndUpdate(
    {
      $and: [{ _id: req.params.id }, { createdBy: req.user._id }],
    },
    req.body,
    {
      new: true, //! display the updated document
      runValidators: true, //! validate the updated document
    }
  );
  if (!updatedTodo) throw new ErrorHandler(404, "Todo not found");
  res.status(200).json({ success: true, message: "Todo updated", updatedTodo });
});

exports.deleteTodo = asyncHandler(async (req, res) => {
  let deletedTodo = await todoModel.findOneAndDelete({
    _id: req.params.id,
    createdBy: req.user._id,
  });

  if (!deletedTodo) throw new ErrorHandler(404, "Todo not found");
  await userModel.updateOne({ _id: req.user._id }, { $inc: { totalNumberOfTasks: -1 } });

  res.status(200).json({ success: true, message: "Todo deleted", deletedTodo });
});
