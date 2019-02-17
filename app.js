import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router"; //전체를 export 한게 아니라 userRouter만 export한것

const app = express();


const handleHome = (req,res)=>res.send('Hello hi');
const handleA = (req,res)=>res.send('a hii');
const betweenHome = (req,res,next)=> {
    console.log("between");
    next();
};

app.use(cookieParser()); // session을 다루기 위한 미들웨어
app.use(bodyParser.json()); // 서버로부터 오는 값을 받기 위한 미들웨어
app.use(bodyParser.urlencoded({extended : true})); // 서버로부터 오는 값을 받기 위한 미들웨어
app.use(helmet()); // 보안을 위해 사용 하는 미들웨어
app.use(morgan("tiny")); // logger 역할을 하는 미들웨어
app.use(betweenHome); // 모든 라우터에 적용

app.get('/', handleHome);

app.get('/a', handleA);

app.use("/user", userRouter);

export default app; // somebody import my file i give him app object