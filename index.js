import express from "express";
const app = express();
const PORT = 4000;

const listening = ()=>console.log(`listening now : ${PORT}`);
const handleHome = (req,res)=>res.send('Hello hi');

app.get('/', handleHome);

app.listen(PORT, listening);