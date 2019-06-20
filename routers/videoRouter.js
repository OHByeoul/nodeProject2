import express from "express";
import routes from "../routes";
import {getUpload, postUpload, getEditVideo, deleteVideo, postEditVideo, home, search, videoDetail } from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.home, home);
//upload video
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.search, search);
//video detail
videoRouter.get(routes.videoDetail(), videoDetail);
//edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//delete video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
