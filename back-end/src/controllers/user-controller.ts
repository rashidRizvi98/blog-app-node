import { RequestHandler } from "express";
import { getLogger } from "../helpers/logger";
import { IUser } from "../models/user";
import userService from "../services/user-service";

const logger = getLogger("USER CONTROLLER")

export const registerUser: RequestHandler = async (req,res,next) => {

    const payload : IUser = req.body;
    try {
        const [registeredUser ,created] = await userService.registerUser(payload);
        if (created) {
            return res.status(201)
            .json({ message: "User Registered Successfully", data: registeredUser });        
        }else{
            return res.status(200)
            .json({ message: "User has already registered", data: registeredUser });
        }
    } catch (error) {
        return next(error); 
    }
}

export const findUser: RequestHandler = async (req, res, next) => {
    
    try {
        const user = await userService.findUser(req.body.email);
        return res.status(200)
        .json({ data: user });        
    } catch (error) {
        return next(error);    
    }
}