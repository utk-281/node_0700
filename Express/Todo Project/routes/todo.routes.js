const { Router } = require("express");
const { addTodo } = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);
// injecting a middleware ==> router level middleware
module.exports = router;
