import { NextFunction, Request, RequestHandler, Response } from "express";
import { getLogger } from "../helpers/logger";
import { IBlog } from "../models/blog";
import blogService from "../services/blog-service";
import { HttpError } from "../helpers/custom-error";

const logger = getLogger("BLOG CONTROLLER")

export const createBlog: RequestHandler = async (req: Request & { userId: string },res,next) => {

    logger.info(`createBlog: ${req.body}`);

    const payload : IBlog = req.body;
    payload.authorId = req.userId;

    try {
        const blog = await blogService.createBlog(payload);
            return res.status(201)
            .json({ message: "Blog has been created Successfully", data: blog });        
     } catch (error) {
        return next(error); 
    }
}

export const findBlog: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    logger.info('findBook: ', req.params);
    try {
        const { id } = req.params;
        const blog = await blogService.findBlog(id);
        if (!blog) {
            throw new HttpError(404, "Invalid id");
        }    
        return res.status(200)
        .json({ data: blog });
    } catch (error) {
        return next(error);       
    }
}