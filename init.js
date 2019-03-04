import "./db";
import app from "./app"; //default로 export해서 이런식으로 받아옴
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handleListening = ()=> console.log(`Listening on : ${PORT}`);

app.listen(PORT, handleListening);