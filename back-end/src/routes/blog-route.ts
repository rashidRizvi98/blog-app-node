import { Router } from "express";
import { createBlog, findAllBlogs, findBlog, findUserBlogs, updateUserBlog } from "../controllers/blog-controller";
import { verifyToken } from "../middlewares/auth";

const blogRouter = Router();

blogRouter.post("/", [verifyToken], createBlog);

blogRouter.get("/", findAllBlogs);

blogRouter.get("/my", [verifyToken], findUserBlogs);

blogRouter.get("/:id", findBlog);

blogRouter.put("/", [verifyToken], updateUserBlog);

export default blogRouter;