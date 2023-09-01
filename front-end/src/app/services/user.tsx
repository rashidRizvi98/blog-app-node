import axios from "axios";
import { baseApiUrl } from "../config/config";
import { IUser, IUserCreateResponse } from "../models/user";

export const registerUser = async(payload: Partial<IUser>) => {
    const response = await fetch(`${baseApiUrl}/users/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' },   credentials: 'same-origin', body: JSON.stringify(payload) });
    const data = await response.json();

    if (response.status != 201) {
        return Promise.reject(response);
    }
    return data as IUserCreateResponse;
} 

export const login = async(payload: Partial<IUser>) => {
    try{
    const response = await axios.post(`${baseApiUrl}/users/signin`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });
    
      if (response.status !== 200) {
        return Promise.reject(response);
      }
    
      const data = response.data as IUserCreateResponse;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
}