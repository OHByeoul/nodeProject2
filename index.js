import express from "express";
const app = express();
const PORT = 4000;

const listening = ()=>console.log(`listening now : ${PORT}`);
const handleHome = (req,res)=>res.send('Hello hi');
const handleA = (req,res)=>res.send('a hi');
const betweenHome = (req,res,next)=> {
    console.log("between");
    next();
};

app.use(betweenHome); // 모든 라우터에 적용

app.get('/', handleHome);

app.get('/a', handleA);

app.listen(PORT, listening);