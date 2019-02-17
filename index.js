const express = require("express");
const app = express();
const PORT = 4000;

app.get('/', function getHome(req,res) {  
    res.send('Hello');
});

app.listen(PORT, function listening() {  
    console.log(`listening now : ${PORT}`);
});