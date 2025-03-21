const { Router } = require("express");
const {
  addTodo,
  fetchAllTodos,
  fetchOneTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);
// injecting a middleware ==> router level middleware

router.get("/all", authenticate, fetchAllTodos);
router.get("/:id", authenticate, fetchOneTodo);

router.patch("/:id", authenticate, updateTodo);

router.delete("/:id", authenticate, deleteTodo);
module.exports = router;

// in mongodb date is stored as ISO format
// yyyy-mm-ddThh:mm:ss

// in js ==> mm-dd-yyyy
