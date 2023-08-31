import { Router } from "express";
import { findUser, registerUser } from "../controllers/user-controller";

const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post("/find-user", findUser);


export default userRouter;