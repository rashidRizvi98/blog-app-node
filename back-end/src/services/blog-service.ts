import { Blog } from "../database/models/blog";
import { User } from "../database/models/user";
import { IBlog } from "../models/blog";

const createBlog = async (payload: IBlog)=> {
    return Blog.create(payload);
 }

const findBlog = async (blogId: string) => {
    return Blog.findOne({
        where: {
            id : blogId,
        },
        include: User
    });
}

const findAllBlogs = async () => {
    return Blog.findAll({
        include: User
    });
} 

const findAllUserBlogs = async (authorId: string) => {
    return Blog.findAll({
        where:{
            authorId
        },
        include: User
    });
}
const deleteBlog = async (blogId: string,authorId: string) => {
    return Blog.destroy({
        where: {
            id: blogId,
            authorId
        }
    });
}

const updateBlog =async (payload: IBlog) => {
    const blog = await Blog.findOne({
        where: { id: payload.id, authorId: payload.authorId }
    });
    return blog.update(payload);
}

 export default { 
    createBlog,
    findBlog,
    findAllBlogs,
    findAllUserBlogs,
    deleteBlog,
    updateBlog
 }