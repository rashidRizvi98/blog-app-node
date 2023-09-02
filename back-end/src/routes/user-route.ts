import { Router } from "express";
import { findUser, registerUser, signin } from "../controllers/user-controller";
import { userRegistrationInputValidator } from "../middlewares/user-input-validator";

const userRouter = Router();

userRouter.post("/register", userRegistrationInputValidator(), registerUser);

userRouter.post("/find-user", findUser);

userRouter.post("/signin", signin);


export default userRouter;