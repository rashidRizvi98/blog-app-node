import { Blog } from "../database/models/blog";
import { User } from "../database/models/user";
import { paginate } from "../helpers/pagination";
import { Pagination } from "../models/Pagination";
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

const findAllBlogs = async ({ page, size}: Pagination) => {
    const res = await Blog.findAndCountAll(
        paginate(
          {
            include: User
          },
          { page, size },
        ),
      );
    return {
        blogs: res.rows,
        totalElements: res.count
      }
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