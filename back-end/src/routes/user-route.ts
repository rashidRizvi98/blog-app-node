import { Router } from "express";
import { findUser, registerUser, signin } from "../controllers/user-controller";

const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post("/find-user", findUser);

userRouter.post("/signin", signin);


export default userRouter;