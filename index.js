const express = require("express");
const app = express();

app.get('/', function getHome(req,res) {  
    res.send('Hello');
});

app.listen(4000, function listening() {  
    console.log("listening now");
});