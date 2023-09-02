import { IUser } from "./user";

export interface IBlog {
    id: string;
    title: string;
    content: string;
    authorId: string;
    author: IUser;
}

export interface IBlogCreateResponse {
    data: IBlog;
  }

export interface IBlogListResponse {
    data: IBlog[];
}
export interface IPaginatedBlogListResponse {
    data: IPaginatedBlogs;
}

export interface IPaginatedBlogs {
    blogs: IBlog[];
    totalElements: number;
}