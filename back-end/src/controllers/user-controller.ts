import { RequestHandler } from "express";
import bCrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getLogger } from "../helpers/logger";
import { IUser } from "../models/user";
import userService from "../services/user-service";
import { User } from "../database/models/user";
import { jwtConfig } from "../config/config";
import { validationResult } from "express-validator";

const logger = getLogger("USER CONTROLLER")

export const registerUser: RequestHandler = async (req,res,next) => {

  const errors = validationResult(req);

    if (!errors.isEmpty()) {
        logger.error(errors.array());
        return res.status(400).json({ errors: errors.array() });
    }


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


export const signin = async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
  
      const passwordIsValid = bCrypt.compareSync(
        req.body.password,
        user.password
      );
  
      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Invalid Password!",
        });
      }
  
      const token = jwt.sign({ id: user.id },
                             jwtConfig.secret,
                             {
                              algorithm: 'HS256',
                              allowInsecureKeySizes: true,
                              expiresIn: 86400, // 24 hours
                             });
    
      req.session.token = token;
  
      return res.status(200).send({
        id: user.id,
        email: user.email
      });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  };
  
export const signout = async (req, res, next) => {
    try {
      req.session = null;
      return res.status(200).send({
        message: "You've been signed out!"
      });
    } catch (err) {
      next(err);
    }
  };