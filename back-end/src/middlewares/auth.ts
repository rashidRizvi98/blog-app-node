import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { jwtConfig } from "../config/config";

export const verifyToken = (req, res, next) => {
    let token = req?.session?.token;
    console.log("req",req.session)
  
    if (!token) {
      return res.status(403).send({
        message: "No token provided!",
      });
    }
  
    jwt.verify(token,
               jwtConfig.secret,
               (err, decoded) => {
                if (err) {
                  return res.status(401).send({
                    message: "Unauthorized!",
                  });
                }
                req.userId = decoded.id;
                console.log("req.userId",req.userId)
                next();
               });
  };