
export interface IBlog {
    id: string;
    title: string;
    content: string;
    authorId: string;
}

export interface IBlogCreateResponse {
    data: IBlog;
  }