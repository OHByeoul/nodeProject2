import express from "express";
import routes from "../routes";

const userRouter = express.Router(); //전체를 export 한게 아니라 userRouter만 export할 때 {}사용

userRouter.get(routes.users, (req,res)=>res.send("users"));
userRouter.get(routes.userDetail, (req,res)=>res.send("userDetail"));
userRouter.get(routes.editProfile, (req,res)=>res.send("editProfile"));
userRouter.get(routes.changePassword, (req,res)=>res.send("changePassword"));

export default userRouter;
