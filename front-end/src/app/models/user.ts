
export interface IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface IUserCreateResponse {
    data: IUser;
}