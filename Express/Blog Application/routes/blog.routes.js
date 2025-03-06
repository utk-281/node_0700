const { Router } = require("express");
const {
  createBlog,
  fetchAllBlogs,
  fetchOneBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");
const router = Router();

router.post("/add", createBlog);
router.get("/blogs", fetchAllBlogs);
router.get("/blog/:id", fetchOneBlog);
router.patch("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
