import { Pagination } from "../models/Pagination";

export const paginate = (query: any, { page, size }: Pagination) => {
    const offset = (page -1) * size;
    const limit = size;
  
    return {
      ...query,
      offset,
      limit,
    };
  };