import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter"; 
import videoRouter from "./routers/videoRouter"; 
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(cookieParser()); // session을 다루기 위한 미들웨어
app.use(bodyParser.json()); // 서버로부터 오는 값을 받기 위한 미들웨어
app.use(bodyParser.urlencoded({extended : true})); // 서버로부터 오는 값을 받기 위한 미들웨어
app.use(helmet()); // 보안을 위해 사용 하는 미들웨어
app.use(morgan("tiny")); // logger 역할을 하는 미들웨어

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app; // somebody import my file i give him app object