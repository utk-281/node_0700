const { Router } = require("express");
const { addTodo, fetchAllTodos } = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);
// injecting a middleware ==> router level middleware

router.get("/all", authenticate, fetchAllTodos);
module.exports = router;
