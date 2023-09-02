import { Router } from "express";
import { createBlog, findAllBlogs, findBlog } from "../controllers/blog-controller";
import { verifyToken } from "../middlewares/auth";

const blogRouter = Router();

blogRouter.post("/", [verifyToken], createBlog);

blogRouter.get("/:id", findBlog);

blogRouter.get("/", findAllBlogs);

export default blogRouter;