import { Blog } from "../database/models/blog";
import { IBlog } from "../models/blog";

const createBlog = async (payload: IBlog)=> {
    return Blog.create(payload);
 }

const findBlog = async (blogId: string) => {
    return Blog.findByPk(blogId);
}

const findAllBlogs = async () => {
    return Blog.findAll();
} 

const findAllUserBlogs = async (authorId: string) => {
    return Blog.findAll({
        where:{
            authorId
        }
    });
}
const deleteBlog = async (blogId: string) => {
    return Blog.destroy({
        where: {
            id: blogId
        }
    });
}

const updateBlog =async (payload: IBlog) => {
    return Blog.update(payload, { where: { id: payload.id } });
}

 export default { 
    createBlog,
    findBlog,
    findAllBlogs,
    findAllUserBlogs,
    deleteBlog,
    updateBlog
 }