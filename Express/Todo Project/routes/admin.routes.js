const { Router } = require("express");
const { authenticate } = require("../middlewares/authenticate.middleware");
const {
  getAllUsers,
  fetchOneUser,
  updateUserRole,
  fetchAllTodos,
  fetchOneTodo,
} = require("../controllers/admin.controller");
const { authorize } = require("../middlewares/authorize.middleware");
const router = Router();

router.get("/all", authenticate, authorize, getAllUsers);
//? in postman, url ==> http://localhost:3000/v1/admin/all

router.get("/user/:id", authenticate, authorize, fetchOneUser);
//? in postman, url ==> http://localhost:3000/v1/admin/user/:id

router.patch("/user/:id", authenticate, authorize, updateUserRole);
//? in postman, url ==> http://localhost:3000/v1/admin/user/:id

router.get("/all-todo", authenticate, authorize, fetchAllTodos);
//? in postman, url ==> http://localhost:3000/v1/admin/all-todo

router.get("/todo/:id", authenticate, authorize, fetchOneTodo);
//? in postman, url ==> http://localhost:3000/v1/admin/todo/:id

module.exports = router;
