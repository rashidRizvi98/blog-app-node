import { NextFunction, Request, RequestHandler, Response } from "express";
import { getLogger } from "../helpers/logger";
import { IBlog } from "../models/blog";
import blogService from "../services/blog-service";
import { HttpError } from "../helpers/custom-error";

const logger = getLogger("BLOG CONTROLLER")

export const createBlog: RequestHandler = async (req: Request & { userId: string },res,next) => {

    logger.info(`createBlog: ${JSON.stringify(req.body, null, 2)}`);

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
    logger.info('findBook: ', JSON.stringify(req.params, null, 2));
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

export const findAllBlogs =async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { page,size } = req.query;
        let pageSize = Number(size);
        let pageNumber = Number(page);
        if (Number(size) > 10 || pageSize == null) {
             pageSize = 10;
        }

        if (page == null) {
            pageNumber = 1;
        }

        const blogs = await blogService.findAllBlogs({ page: pageNumber, size: pageSize });
        return res.status(200)
        .json({ data: blogs });
    } catch (error) {
        return next(error);       
    }
}

export const findUserBlogs =async (req: Request & { userId: string }, res: Response, next: NextFunction) => {
    try {
        const blogs = await blogService.findAllUserBlogs(req.userId);
        return res.status(200)
        .json({ data: blogs });
    } catch (error) {
        return next(error);       
    }
}

export const updateUserBlog =async (req: Request & { userId: string }, res: Response, next: NextFunction) => {
    try {
        const payload : IBlog = req.body;
        payload.authorId = req.userId;
        const blog = await blogService.updateBlog(payload);
        return res.status(200)
        .json({ data: blog });
    } catch (error) {
        return next(error);       
    }
}

export const deleteBlog =async (req: Request & { userId: string }, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const blog = await blogService.deleteBlog(id, req.userId);
        return res.status(200)
        .json({ data: blog });
    } catch (error) {
        return next(error);       
    }
}