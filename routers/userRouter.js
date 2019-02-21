import express from "express";
import routes from "../routes";
import { userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router(); //전체를 export 한게 아니라 userRouter만 export할 때 {}사용

userRouter.get(routes.home, (req,res)=>res.send("users"));
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
