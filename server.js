const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(2000,()=>{
    console.log("App is listening at port 2000");
})