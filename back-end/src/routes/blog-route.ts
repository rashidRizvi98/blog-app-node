import { Router } from "express";
import { createBlog, findBlog } from "../controllers/blog-controller";
import { verifyToken } from "../middlewares/auth";

const blogRouter = Router();

blogRouter.post("/", [verifyToken], createBlog);

blogRouter.get("/:id", findBlog);

export default blogRouter;