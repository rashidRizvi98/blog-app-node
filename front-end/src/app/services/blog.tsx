import axios from "axios";
import { baseApiUrl } from "../config/config";
import { IBlog, IBlogCreateResponse, IBlogListResponse } from "../models/blog";
axios.defaults.withCredentials = true;

export const createBlog = async(payload: Partial<IBlog>) => {
    const response = await axios.post(`${baseApiUrl}/blogs`, payload);
    const data = response.data;

    if (response.status != 201) {
        return Promise.reject(response);
    }
    return data as IBlogCreateResponse;
}

export const getAllBlogs = async() => {
    const response = await axios.get(`${baseApiUrl}/blogs`);
    const data = response.data;

    if (response.status != 200) {
        return Promise.reject(response);
    }
    return data as IBlogListResponse;
}

export const getMyBlogs = async() => {
    const response = await axios.get(`${baseApiUrl}/blogs/my`);
    const data = response.data;

    if (response.status != 200) {
        return Promise.reject(response);
    }
    return data as IBlogListResponse;
}

export const getBlog = async(blogId: string) => {
    const response = await axios.get(`${baseApiUrl}/blogs/${blogId}`);
    const data = response.data;

    if (response.status != 200) {
        return Promise.reject(response);
    }
    return data as IBlogCreateResponse;
}

export const updateBlog = async(payload: Partial<IBlog>) => {
    const response = await axios.put(`${baseApiUrl}/blogs`, payload);
    const data = response.data;

    if (response.status != 200) {
        return Promise.reject(response);
    }
    return data as IBlogCreateResponse;
}

export const deleteBlog = async(blogId: string) => {
    const response = await axios.delete(`${baseApiUrl}/blogs/${blogId}`);
    const data = response.data;

    if (response.status != 200) {
        return Promise.reject(response);
    }
    return data as IBlogCreateResponse;
}