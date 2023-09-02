import { Router } from "express";
import { createBlog, deleteBlog, findAllBlogs, findBlog, findUserBlogs, updateUserBlog } from "../controllers/blog-controller";
import { verifyToken } from "../middlewares/auth";

const blogRouter = Router();

blogRouter.post("/", [verifyToken], createBlog);

blogRouter.get("/", findAllBlogs);

blogRouter.get("/my", [verifyToken], findUserBlogs);

blogRouter.get("/:id", findBlog);

blogRouter.delete("/:id", [verifyToken], deleteBlog);

blogRouter.put("/", [verifyToken], updateUserBlog);

export default blogRouter;