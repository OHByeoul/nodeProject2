import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const app = express();
const PORT = 4000;

const listening = ()=>console.log(`listening now : ${PORT}`);
const handleHome = (req,res)=>res.send('Hello hi');
const handleA = (req,res)=>res.send('a hii');
const betweenHome = (req,res,next)=> {
    console.log("between");
    next();
};

app.use(helmet()); // 보안을 위해 사용 하는 미들웨어
app.use(morgan("tiny")); // logger 역할을 하는 미들웨어
app.use(betweenHome); // 모든 라우터에 적용

app.get('/', handleHome);

app.get('/a', handleA);

app.listen(PORT, listening);