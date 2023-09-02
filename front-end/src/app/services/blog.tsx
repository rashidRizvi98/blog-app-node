import { baseApiUrl } from "../config/config";
import { IBlog, IBlogCreateResponse } from "../models/blog";

export const createBlog = async(payload: Partial<IBlog>) => {
    const response = await fetch(`${baseApiUrl}/blogs`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await response.json();

    if (response.status != 201) {
        return Promise.reject(response);
    }
    return data as IBlogCreateResponse;
} 